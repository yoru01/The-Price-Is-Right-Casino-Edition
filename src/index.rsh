"reach 0.1";
//Outcome array
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3); 

//This computes the winner of the game
const winner = (rand,hand1, hand2) => {
  const x = rand;
  if (hand1 == x && hand2 != x){
    return A_WINS;
  }
  else if(hand1 != x  && hand2 == x){
    return B_WINS;
  }
  else if (hand1 == x && hand2 == x){
    return DRAW;
  }
  else  return DRAW;

};


// Makes the required payment to the winner
const payWinner = (outcome, wager, Alice, Bob, House) => {
  if (outcome == DRAW) {
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome)
    });
    transfer(2*wager).to(House);
  }
  else if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
  else {
    transfer(2*wager).to(House);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
}

const Common  =  {
    ...hasRandom
};
//Player abilities
const Player = {
  seeRules: Fun([UInt, UInt], Null),
  getHand: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  informNewRound: Fun([], Null),

};


export const main = Reach.App(() => {
// House Interface
const House = Participant('House', {
    ...Common,
    wager: UInt,
    limit: UInt,
    trials: UInt,
    deadline: UInt,
    rand: Fun([UInt], UInt),
    waitingForAttacher: Fun([], Null),
    seeOutcome: Fun([UInt], Null),
})
//Alice interface
  const Alice = Participant('Alice', {
    ...hasRandom,
    ...Player,
    acceptWager: Fun([UInt], Null), 
    //waitingForAttacher: Fun([], Null)
  });
//Bob interface
  const Bob   = Participant('Bob', {
    ...hasRandom,
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };
//Alice and Bob accept the rules and pay the wager
  House.only(() => {
    const limit = declassify(interact.limit);
    const trials = declassify(interact.trials);
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
    const rand = declassify(interact.rand(limit));
  });
  House.publish(limit, trials, wager, deadline, rand)
  commit();

  House.interact.waitingForAttacher();
  Alice.only(() => {
    interact.seeRules(limit, trials);
    interact.acceptWager(wager);
  });
  Alice.publish();
  commit();
  Alice.pay(wager);
  commit();


  Bob.only(() => {
    interact.seeRules(limit, trials);
    interact.acceptWager(wager);
    //const randomBob = declassify(interact.getRandom());
  });
  Bob.publish()
  .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

//While loop that loops as long as  the conditions are not met
  var [stage, hand1, hand2 ] = [trials,0,0];
  invariant( balance() == 2 * wager);

  while ((hand1!= rand && hand2 != rand) && (stage > 0)) {
    commit();

    Bob.interact.informNewRound();
    Alice.interact.informNewRound();

    Alice.only(() => {
      const _handAlice = interact.getHand(limit);
      
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
      const commitAlice = declassify(_commitAlice);
      });
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getHand(limit));
      
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_handAlice);
    });
    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);
    
    [stage, hand1, hand2] = [stage-1, handAlice, handBob];
    continue;

  }
  //Using the winner function with arguments of the users inputs and the random number to get the winner
  const outcome = winner(rand, hand1, hand2);
  House.interact.seeOutcome(outcome);

//Uses the outcome to pay the winner
  payWinner(outcome,wager, Alice, Bob, House);

  commit();

});
