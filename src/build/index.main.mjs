// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0],
      3: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc0, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc0, ctc1, ctc1, ctc2, ctc1],
      13: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v346, v347, v348, v349, v350], secs: v352, time: v351, didSend: v35, from: v345 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.seeRules(v346, v347), {
    at: './index.rsh:107:22:application',
    fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
    msg: 'seeRules',
    who: 'Alice'
    });
  stdlib.protect(ctc1, await interact.acceptWager(v348), {
    at: './index.rsh:108:25:application',
    fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
    msg: 'acceptWager',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v345, v347, v348, v349, v350],
    evt_cnt: 0,
    funcNum: 1,
    lct: v351,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v358, time: v357, didSend: v46, from: v356 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v358, time: v357, didSend: v46, from: v356 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v345, v347, v348, v349, v350, v356],
    evt_cnt: 0,
    funcNum: 2,
    lct: v357,
    onlyIf: true,
    out_tys: [],
    pay: [v348, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v361, time: v360, didSend: v53, from: v359 } = txn3;
      
      sim_r.txns.push({
        amt: v348,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v371 = stdlib.add(v360, v349);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v361, time: v360, didSend: v53, from: v359 } = txn3;
  ;
  const v364 = stdlib.addressEq(v356, v359);
  stdlib.assert(v364, {
    at: './index.rsh:112:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v371 = stdlib.add(v360, v349);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v371],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v345, v347, v348, v349, v350, v356, v371],
      evt_cnt: 0,
      funcNum: 4,
      lct: v360,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v570, time: v569, didSend: v304, from: v568 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v570, time: v569, didSend: v304, from: v568 } = txn5;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:123:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v377, time: v376, didSend: v62, from: v375 } = txn4;
    const v379 = stdlib.add(v348, v348);
    ;
    let v380 = stdlib.checkedBigNumberify('./index.rsh:126:40:decimal', stdlib.UInt_max, '0');
    let v381 = stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '0');
    let v382 = v347;
    let v383 = v376;
    let v390 = v379;
    
    while (await (async () => {
      const v394 = stdlib.eq(v380, v350);
      const v396 = stdlib.eq(v381, v350);
      const v397 = v396 ? false : true;
      const v398 = v394 ? false : v397;
      const v399 = stdlib.gt(v382, stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, '0'));
      const v400 = v398 ? v399 : false;
      
      return v400;})()) {
      const v407 = stdlib.add(v383, v349);
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:133:34:application',
        fs: ['at ./index.rsh:133:34:application call to [unknown function] (defined at: ./index.rsh:133:34:function exp)', 'at ./index.rsh:133:34:application call to "liftedInteract" (defined at: ./index.rsh:133:34:application)'],
        msg: 'informNewRound',
        who: 'Alice'
        });
      
      const v413 = stdlib.protect(ctc0, await interact.getHand(v346), {
        at: './index.rsh:136:42:application',
        fs: ['at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v414 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:138:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v415 = stdlib.digest(ctc2, [v414, v413]);
      
      const txn5 = await (ctc.sendrecv({
        args: [v345, v348, v349, v350, v356, v375, v382, v390, v407, v415],
        evt_cnt: 1,
        funcNum: 6,
        lct: v383,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:141:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v418], secs: v420, time: v419, didSend: v101, from: v417 } = txn5;
          
          ;
          const v428 = stdlib.add(v419, v349);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v407],
        tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v345, v348, v349, v350, v356, v375, v382, v390, v407],
          evt_cnt: 0,
          funcNum: 7,
          lct: v383,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v499, time: v498, didSend: v219, from: v497 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v375,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v499, time: v498, didSend: v219, from: v497 } = txn6;
        ;
        const v500 = stdlib.addressEq(v356, v497);
        const v501 = stdlib.addressEq(v375, v497);
        const v502 = v500 ? true : v501;
        const v503 = stdlib.addressEq(v345, v497);
        const v504 = v502 ? true : v503;
        stdlib.assert(v504, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:91:29:application',
          fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v418], secs: v420, time: v419, didSend: v101, from: v417 } = txn5;
        ;
        const v421 = stdlib.addressEq(v356, v417);
        stdlib.assert(v421, {
          at: './index.rsh:141:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v428 = stdlib.add(v419, v349);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc0],
          timeoutAt: ['time', v428],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v428],
            evt_cnt: 0,
            funcNum: 9,
            lct: v419,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v479, time: v478, didSend: v183, from: v477 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v356,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v479, time: v478, didSend: v183, from: v477 } = txn7;
          ;
          const v480 = stdlib.addressEq(v356, v477);
          const v481 = stdlib.addressEq(v375, v477);
          const v482 = v480 ? true : v481;
          const v483 = stdlib.addressEq(v345, v477);
          const v484 = v482 ? true : v483;
          stdlib.assert(v484, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:151:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:91:29:application',
            fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:151:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v434], secs: v436, time: v435, didSend: v111, from: v433 } = txn6;
          ;
          const v437 = stdlib.addressEq(v375, v433);
          stdlib.assert(v437, {
            at: './index.rsh:150:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v444 = stdlib.add(v435, v349);
          const txn7 = await (ctc.sendrecv({
            args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v434, v444, v414, v413],
            evt_cnt: 2,
            funcNum: 10,
            lct: v435,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:158:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v449, v450], secs: v452, time: v451, didSend: v121, from: v448 } = txn7;
              
              ;
              const v456 = stdlib.sub(v382, stdlib.checkedBigNumberify('./index.rsh:162:36:decimal', stdlib.UInt_max, '1'));
              const cv380 = v450;
              const cv381 = v434;
              const cv382 = v456;
              const cv383 = v451;
              const cv390 = v390;
              
              await (async () => {
                const v380 = cv380;
                const v381 = cv381;
                const v382 = cv382;
                const v383 = cv383;
                const v390 = cv390;
                
                if (await (async () => {
                  const v394 = stdlib.eq(v380, v350);
                  const v396 = stdlib.eq(v381, v350);
                  const v397 = v396 ? false : true;
                  const v398 = v394 ? false : v397;
                  const v399 = stdlib.gt(v382, stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, '0'));
                  const v400 = v398 ? v399 : false;
                  
                  return v400;})()) {
                  const v407 = stdlib.add(v383, v349);
                  sim_r.isHalt = false;
                  }
                else {
                  let v517;
                  const v518 = stdlib.eq(v380, v350);
                  const v519 = stdlib.eq(v381, v350);
                  const v520 = v519 ? false : true;
                  const v521 = v518 ? v520 : false;
                  if (v521) {
                    v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    const v525 = v518 ? false : v519;
                    if (v525) {
                      v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      v517 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
                      }
                    }
                  const v530 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  if (v530) {
                    
                    const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:33:14:decimal', stdlib.UInt_max, '2'), v348);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v345,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v543 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                    if (v543) {
                      const v544 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v348);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v356,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v348);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v345,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v444],
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v434, v444],
              evt_cnt: 0,
              funcNum: 11,
              lct: v435,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v459, time: v458, didSend: v147, from: v457 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v375,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v459, time: v458, didSend: v147, from: v457 } = txn8;
            ;
            const v460 = stdlib.addressEq(v356, v457);
            const v461 = stdlib.addressEq(v375, v457);
            const v462 = v460 ? true : v461;
            const v463 = stdlib.addressEq(v345, v457);
            const v464 = v462 ? true : v463;
            stdlib.assert(v464, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:91:29:application',
              fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v449, v450], secs: v452, time: v451, didSend: v121, from: v448 } = txn7;
            ;
            const v453 = stdlib.addressEq(v356, v448);
            stdlib.assert(v453, {
              at: './index.rsh:158:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v454 = stdlib.digest(ctc2, [v449, v450]);
            const v455 = stdlib.digestEq(v418, v454);
            stdlib.assert(v455, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:160:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v456 = stdlib.sub(v382, stdlib.checkedBigNumberify('./index.rsh:162:36:decimal', stdlib.UInt_max, '1'));
            const cv380 = v450;
            const cv381 = v434;
            const cv382 = v456;
            const cv383 = v451;
            const cv390 = v390;
            
            v380 = cv380;
            v381 = cv381;
            v382 = cv382;
            v383 = cv383;
            v390 = cv390;
            
            continue;}
          
          }
        
        }
      
      }
    let v517;
    const v518 = stdlib.eq(v380, v350);
    const v519 = stdlib.eq(v381, v350);
    const v520 = v519 ? false : true;
    const v521 = v518 ? v520 : false;
    if (v521) {
      v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v525 = v518 ? false : v519;
      if (v525) {
        v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v517 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    const v530 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v530) {
      stdlib.protect(ctc1, await interact.seeOutcome(v517), {
        at: './index.rsh:31:26:application',
        fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:27:function exp)', 'at ./index.rsh:171:12:application call to "payWinner" (defined at: ./index.rsh:28:55:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:33:14:decimal', stdlib.UInt_max, '2'), v348);
      ;
      return;
      }
    else {
      const v543 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v543) {
        const v544 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v348);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v517), {
          at: './index.rsh:38:26:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at ./index.rsh:171:12:application call to "payWinner" (defined at: ./index.rsh:28:55:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v348);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v517), {
          at: './index.rsh:44:26:application',
          fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:27:function exp)', 'at ./index.rsh:171:12:application call to "payWinner" (defined at: ./index.rsh:28:55:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v346, v347, v348, v349, v350], secs: v352, time: v351, didSend: v35, from: v345 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v358, time: v357, didSend: v46, from: v356 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v361, time: v360, didSend: v53, from: v359 } = txn3;
  ;
  const v364 = stdlib.addressEq(v356, v359);
  stdlib.assert(v364, {
    at: './index.rsh:112:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v371 = stdlib.add(v360, v349);
  stdlib.protect(ctc1, await interact.seeRules(v346, v347), {
    at: './index.rsh:117:22:application',
    fs: ['at ./index.rsh:116:11:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)'],
    msg: 'seeRules',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.acceptWager(v348), {
    at: './index.rsh:118:25:application',
    fs: ['at ./index.rsh:116:11:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v345, v347, v348, v349, v350, v356, v371],
    evt_cnt: 0,
    funcNum: 3,
    lct: v360,
    onlyIf: true,
    out_tys: [],
    pay: [v348, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v377, time: v376, didSend: v62, from: v375 } = txn4;
      
      const v379 = stdlib.add(v348, v348);
      sim_r.txns.push({
        amt: v348,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v380 = stdlib.checkedBigNumberify('./index.rsh:126:40:decimal', stdlib.UInt_max, '0');
      const v381 = stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '0');
      const v382 = v347;
      const v383 = v376;
      const v390 = v379;
      
      if (await (async () => {
        const v394 = stdlib.eq(v380, v350);
        const v396 = stdlib.eq(v381, v350);
        const v397 = v396 ? false : true;
        const v398 = v394 ? false : v397;
        const v399 = stdlib.gt(v382, stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, '0'));
        const v400 = v398 ? v399 : false;
        
        return v400;})()) {
        const v407 = stdlib.add(v383, v349);
        sim_r.isHalt = false;
        }
      else {
        let v517;
        const v518 = stdlib.eq(v380, v350);
        const v519 = stdlib.eq(v381, v350);
        const v520 = v519 ? false : true;
        const v521 = v518 ? v520 : false;
        if (v521) {
          v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v525 = v518 ? false : v519;
          if (v525) {
            v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v517 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
            }
          }
        const v530 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v530) {
          
          const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:33:14:decimal', stdlib.UInt_max, '2'), v348);
          sim_r.txns.push({
            kind: 'from',
            to: v345,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v543 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v543) {
            const v544 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v348);
            sim_r.txns.push({
              kind: 'from',
              to: v356,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v348);
            sim_r.txns.push({
              kind: 'from',
              to: v345,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v371],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v345, v347, v348, v349, v350, v356, v371],
      evt_cnt: 0,
      funcNum: 4,
      lct: v360,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v570, time: v569, didSend: v304, from: v568 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v570, time: v569, didSend: v304, from: v568 } = txn5;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:123:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v377, time: v376, didSend: v62, from: v375 } = txn4;
    const v379 = stdlib.add(v348, v348);
    ;
    let v380 = stdlib.checkedBigNumberify('./index.rsh:126:40:decimal', stdlib.UInt_max, '0');
    let v381 = stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '0');
    let v382 = v347;
    let v383 = v376;
    let v390 = v379;
    
    while (await (async () => {
      const v394 = stdlib.eq(v380, v350);
      const v396 = stdlib.eq(v381, v350);
      const v397 = v396 ? false : true;
      const v398 = v394 ? false : v397;
      const v399 = stdlib.gt(v382, stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, '0'));
      const v400 = v398 ? v399 : false;
      
      return v400;})()) {
      const v407 = stdlib.add(v383, v349);
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:132:32:application',
        fs: ['at ./index.rsh:132:32:application call to [unknown function] (defined at: ./index.rsh:132:32:function exp)', 'at ./index.rsh:132:32:application call to "liftedInteract" (defined at: ./index.rsh:132:32:application)'],
        msg: 'informNewRound',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeoutAt: ['time', v407],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v345, v348, v349, v350, v356, v375, v382, v390, v407],
          evt_cnt: 0,
          funcNum: 7,
          lct: v383,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v499, time: v498, didSend: v219, from: v497 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v375,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v499, time: v498, didSend: v219, from: v497 } = txn6;
        ;
        const v500 = stdlib.addressEq(v356, v497);
        const v501 = stdlib.addressEq(v375, v497);
        const v502 = v500 ? true : v501;
        const v503 = stdlib.addressEq(v345, v497);
        const v504 = v502 ? true : v503;
        stdlib.assert(v504, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:91:29:application',
          fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v418], secs: v420, time: v419, didSend: v101, from: v417 } = txn5;
        ;
        const v421 = stdlib.addressEq(v356, v417);
        stdlib.assert(v421, {
          at: './index.rsh:141:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v428 = stdlib.add(v419, v349);
        const v432 = stdlib.protect(ctc0, await interact.getHand(v346), {
          at: './index.rsh:147:50:application',
          fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn6 = await (ctc.sendrecv({
          args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v428, v432],
          evt_cnt: 1,
          funcNum: 8,
          lct: v419,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:150:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v434], secs: v436, time: v435, didSend: v111, from: v433 } = txn6;
            
            ;
            const v444 = stdlib.add(v435, v349);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v428],
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v428],
            evt_cnt: 0,
            funcNum: 9,
            lct: v419,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v479, time: v478, didSend: v183, from: v477 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v356,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v479, time: v478, didSend: v183, from: v477 } = txn7;
          ;
          const v480 = stdlib.addressEq(v356, v477);
          const v481 = stdlib.addressEq(v375, v477);
          const v482 = v480 ? true : v481;
          const v483 = stdlib.addressEq(v345, v477);
          const v484 = v482 ? true : v483;
          stdlib.assert(v484, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:151:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:91:29:application',
            fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:151:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v434], secs: v436, time: v435, didSend: v111, from: v433 } = txn6;
          ;
          const v437 = stdlib.addressEq(v375, v433);
          stdlib.assert(v437, {
            at: './index.rsh:150:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v444 = stdlib.add(v435, v349);
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 10,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v444],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v434, v444],
              evt_cnt: 0,
              funcNum: 11,
              lct: v435,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v459, time: v458, didSend: v147, from: v457 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v375,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v459, time: v458, didSend: v147, from: v457 } = txn8;
            ;
            const v460 = stdlib.addressEq(v356, v457);
            const v461 = stdlib.addressEq(v375, v457);
            const v462 = v460 ? true : v461;
            const v463 = stdlib.addressEq(v345, v457);
            const v464 = v462 ? true : v463;
            stdlib.assert(v464, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:91:29:application',
              fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:89:28:function exp)', 'at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v449, v450], secs: v452, time: v451, didSend: v121, from: v448 } = txn7;
            ;
            const v453 = stdlib.addressEq(v356, v448);
            stdlib.assert(v453, {
              at: './index.rsh:158:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v454 = stdlib.digest(ctc3, [v449, v450]);
            const v455 = stdlib.digestEq(v418, v454);
            stdlib.assert(v455, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:160:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v456 = stdlib.sub(v382, stdlib.checkedBigNumberify('./index.rsh:162:36:decimal', stdlib.UInt_max, '1'));
            const cv380 = v450;
            const cv381 = v434;
            const cv382 = v456;
            const cv383 = v451;
            const cv390 = v390;
            
            v380 = cv380;
            v381 = cv381;
            v382 = cv382;
            v383 = cv383;
            v390 = cv390;
            
            continue;}
          
          }
        
        }
      
      }
    let v517;
    const v518 = stdlib.eq(v380, v350);
    const v519 = stdlib.eq(v381, v350);
    const v520 = v519 ? false : true;
    const v521 = v518 ? v520 : false;
    if (v521) {
      v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v525 = v518 ? false : v519;
      if (v525) {
        v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v517 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    const v530 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v530) {
      stdlib.protect(ctc1, await interact.seeOutcome(v517), {
        at: './index.rsh:31:26:application',
        fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:27:function exp)', 'at ./index.rsh:171:12:application call to "payWinner" (defined at: ./index.rsh:28:55:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:33:14:decimal', stdlib.UInt_max, '2'), v348);
      ;
      return;
      }
    else {
      const v543 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v543) {
        const v544 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v348);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v517), {
          at: './index.rsh:38:26:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at ./index.rsh:171:12:application call to "payWinner" (defined at: ./index.rsh:28:55:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v348);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v517), {
          at: './index.rsh:44:26:application',
          fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:27:function exp)', 'at ./index.rsh:171:12:application call to "payWinner" (defined at: ./index.rsh:28:55:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  
  
  
  
  };
export async function House(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for House expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for House expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const v338 = stdlib.protect(ctc0, interact.deadline, 'for House\'s interact field deadline');
  const v339 = stdlib.protect(ctc0, interact.limit, 'for House\'s interact field limit');
  const v340 = stdlib.protect(ctc0, interact.trials, 'for House\'s interact field trials');
  const v341 = stdlib.protect(ctc0, interact.wager, 'for House\'s interact field wager');
  
  const v344 = stdlib.protect(ctc0, await interact.rand(v339), {
    at: './index.rsh:100:42:application',
    fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:17:function exp)'],
    msg: 'rand',
    who: 'House'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v339, v340, v341, v338, v344],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:102:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v346, v347, v348, v349, v350], secs: v352, time: v351, didSend: v35, from: v345 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v346, v347, v348, v349, v350], secs: v352, time: v351, didSend: v35, from: v345 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.waitingForAttacher(), {
    at: './index.rsh:105:36:application',
    fs: ['at ./index.rsh:105:36:application call to [unknown function] (defined at: ./index.rsh:105:36:function exp)', 'at ./index.rsh:105:36:application call to "liftedInteract" (defined at: ./index.rsh:105:36:application)'],
    msg: 'waitingForAttacher',
    who: 'House'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v358, time: v357, didSend: v46, from: v356 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v361, time: v360, didSend: v53, from: v359 } = txn3;
  ;
  const v364 = stdlib.addressEq(v356, v359);
  stdlib.assert(v364, {
    at: './index.rsh:112:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'House'
    });
  const v371 = stdlib.add(v360, v349);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v371],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v345, v347, v348, v349, v350, v356, v371],
      evt_cnt: 0,
      funcNum: 4,
      lct: v360,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v570, time: v569, didSend: v304, from: v568 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v570, time: v569, didSend: v304, from: v568 } = txn5;
    ;
    ;
    return;
    
    }
  else {
    const {data: [], secs: v377, time: v376, didSend: v62, from: v375 } = txn4;
    const v379 = stdlib.add(v348, v348);
    ;
    let v380 = stdlib.checkedBigNumberify('./index.rsh:126:40:decimal', stdlib.UInt_max, '0');
    let v381 = stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '0');
    let v382 = v347;
    let v383 = v376;
    let v390 = v379;
    
    while (await (async () => {
      const v394 = stdlib.eq(v380, v350);
      const v396 = stdlib.eq(v381, v350);
      const v397 = v396 ? false : true;
      const v398 = v394 ? false : v397;
      const v399 = stdlib.gt(v382, stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, '0'));
      const v400 = v398 ? v399 : false;
      
      return v400;})()) {
      const v407 = stdlib.add(v383, v349);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeoutAt: ['time', v407],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v345, v348, v349, v350, v356, v375, v382, v390, v407],
          evt_cnt: 0,
          funcNum: 7,
          lct: v383,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v499, time: v498, didSend: v219, from: v497 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v375,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v499, time: v498, didSend: v219, from: v497 } = txn6;
        ;
        const v500 = stdlib.addressEq(v356, v497);
        const v501 = stdlib.addressEq(v375, v497);
        const v502 = v500 ? true : v501;
        const v503 = stdlib.addressEq(v345, v497);
        const v504 = v502 ? true : v503;
        stdlib.assert(v504, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'House'
          });
        ;
        return;
        
        }
      else {
        const {data: [v418], secs: v420, time: v419, didSend: v101, from: v417 } = txn5;
        ;
        const v421 = stdlib.addressEq(v356, v417);
        stdlib.assert(v421, {
          at: './index.rsh:141:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'House'
          });
        const v428 = stdlib.add(v419, v349);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc0],
          timeoutAt: ['time', v428],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v428],
            evt_cnt: 0,
            funcNum: 9,
            lct: v419,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v479, time: v478, didSend: v183, from: v477 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v356,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v479, time: v478, didSend: v183, from: v477 } = txn7;
          ;
          const v480 = stdlib.addressEq(v356, v477);
          const v481 = stdlib.addressEq(v375, v477);
          const v482 = v480 ? true : v481;
          const v483 = stdlib.addressEq(v345, v477);
          const v484 = v482 ? true : v483;
          stdlib.assert(v484, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:151:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'House'
            });
          ;
          return;
          
          }
        else {
          const {data: [v434], secs: v436, time: v435, didSend: v111, from: v433 } = txn6;
          ;
          const v437 = stdlib.addressEq(v375, v433);
          stdlib.assert(v437, {
            at: './index.rsh:150:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'House'
            });
          const v444 = stdlib.add(v435, v349);
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 10,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v444],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v345, v348, v349, v350, v356, v375, v382, v390, v418, v434, v444],
              evt_cnt: 0,
              funcNum: 11,
              lct: v435,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v459, time: v458, didSend: v147, from: v457 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v375,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v459, time: v458, didSend: v147, from: v457 } = txn8;
            ;
            const v460 = stdlib.addressEq(v356, v457);
            const v461 = stdlib.addressEq(v375, v457);
            const v462 = v460 ? true : v461;
            const v463 = stdlib.addressEq(v345, v457);
            const v464 = v462 ? true : v463;
            stdlib.assert(v464, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'House'
              });
            ;
            return;
            
            }
          else {
            const {data: [v449, v450], secs: v452, time: v451, didSend: v121, from: v448 } = txn7;
            ;
            const v453 = stdlib.addressEq(v356, v448);
            stdlib.assert(v453, {
              at: './index.rsh:158:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'House'
              });
            const v454 = stdlib.digest(ctc3, [v449, v450]);
            const v455 = stdlib.digestEq(v418, v454);
            stdlib.assert(v455, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:160:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'House'
              });
            const v456 = stdlib.sub(v382, stdlib.checkedBigNumberify('./index.rsh:162:36:decimal', stdlib.UInt_max, '1'));
            const cv380 = v450;
            const cv381 = v434;
            const cv382 = v456;
            const cv383 = v451;
            const cv390 = v390;
            
            v380 = cv380;
            v381 = cv381;
            v382 = cv382;
            v383 = cv383;
            v390 = cv390;
            
            continue;}
          
          }
        
        }
      
      }
    let v517;
    const v518 = stdlib.eq(v380, v350);
    const v519 = stdlib.eq(v381, v350);
    const v520 = v519 ? false : true;
    const v521 = v518 ? v520 : false;
    if (v521) {
      v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v525 = v518 ? false : v519;
      if (v525) {
        v517 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v517 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    stdlib.protect(ctc1, await interact.seeOutcome(v517), {
      at: './index.rsh:168:28:application',
      fs: ['at ./index.rsh:168:28:application call to [unknown function] (defined at: ./index.rsh:168:28:function exp)', 'at ./index.rsh:168:28:application call to "liftedInteract" (defined at: ./index.rsh:168:28:application)'],
      msg: 'seeOutcome',
      who: 'House'
      });
    
    const v530 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v530) {
      const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:33:14:decimal', stdlib.UInt_max, '2'), v348);
      ;
      return;
      }
    else {
      const v543 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v543) {
        const v544 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v348);
        ;
        return;
        }
      else {
        const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v348);
        ;
        return;
        }}}
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiATAAECICiAATALAwgJDagBeDiwAYgBBGAmAwEAAQEAIjUAMRhBBocqZEkiWzUBIQlbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEGDEADIkkhCgxAAVZJgQoMQADySSEHDEAAYCEHEkQhCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDV1ggNf+ABOPZNjWwMgY0AyEPWw9ENANXOCAxABI0/zEAEhE0A1cAIDEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IFk0ghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzggNf9JNQVJIls1/iEJWzX9gASTpfY8NP4WUDT9FlCwMgY0AyEPWwxENP8xABJENANXiCA0/hY0/RZQARJENANXACA0AyVbNAMhBFs0AyEGWzT/NANXWCA0/TQDIQxbNAMhDVsjCTIGNAMhBVtCBCRIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1c4IDX/gASiBWaOsDIGNAMhDFsPRDT/MQASNANXWCAxABIRNANXACAxABIRRLEisgE0AyEFW7III7IQNP+yB7NCBKtJgQcMQAEXSSEJDEAAs0ghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yVbNf4hBFs1/SEGWzX8VzggNftXWCA1+iENWzX5IQVbNfhXiCA190k1BRc19oAEL9rpHTT2FlCwMgY0AyEMWwxENPoxABJEMgY0/Qg19TT/NP4WUDT9FlA0/BZQNPtQNPpQNPkWUDT4FlA091A09hZQNPUWUChLAVcAf2cpSwFXfzlnSCELNQEyBjUCQgQGSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXWCA1/4AE4huzqbAyBjQDIRBbD0Q0A1c4IDEAEjT/MQASETQDVwAgMQASEUSxIrIBNAMhBVuyCCOyEDT/sgezQgONSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf0hBls1/Fc4IDX7V1ggNfohDVs1+SEFWzX4STUFNfeABGnuOz4091CwMgY0AyEQWwxENPsxABJEMgY0/Qg19jT/NP4WUDT9FlA0/BZQNPtQNPpQNPkWUDT4FlA091A09hZQKEsBVwB/ZylLAVd/MWdIIQc1ATIGNQJCAwJJJAxAASNJIQgMQAChSSERDEAAQiEREkQhCDQBEkQ0BEkiEkw0AhIRRChkNQOABJEnNPOwMgY0AyESWw9EsSKyATQDIQRbsggjshA0A1dAILIHs0ICkEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDIQRbNf+ABKdlxLSwMgY0AyESWwxENP+IAs00A1cAIDT/NAMhBls0AyEOWzQDV0AgMQAiIjQDJVsyBjT/SQhCAVRIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8lWzX+IQRbNf0hBls1/CEOWzX7V0AgNfqABEGxQE2wNP2IAmQ0+jEAEkQyBjT8CDX5NP80/hZQNP0WUDT8FlA0+xZQNPpQNPkWUChLAVcAaGdIIQg1ATIGNQJCAdlJIwxAAF9IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf0hBls1/CEOWzX7gASai5F0sDT/NP4WUDT9FlA0/BZQNPsWUDEAUChLAVcAYGdIJDUBMgY1AkIBdEiBoI0GiAG+IjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8hCVs1/oEQWzX9gRhbNfwlWzX7gARNfgcnNP8WUDT+FlA0/RZQNPwWUDT7FlCwMQA0/hZQNP0WUDT8FlA0+xZQKEsBVwBAZ0gjNQEyBjUCQgEANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT7NPgSNfQ0/DT4Ekk18xQ18jT0FDTyEDT9Ig0QQQBBNP409wg18TT1NPYWUDT3FlA0+BZQNPlQNPpQNP0WUDT/FlA08RZQKEsBVwB/ZylLAVd/EWdIIQo1ATIGNQJCAIk09DTyEEEABiQ18UIAEjT0FDTzEEEABiI18UIAAyM18TTxIxJBABWxIrIBJDT2C7III7IQNPWyB7NCADE08SQSQQAVsSKyASQ09guyCCOyEDT5sgezQgAVsSKyASQ09guyCCOyEDT1sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEIMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 184,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v449",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v450",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v418",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v449",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v450",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v418",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620025513803806200255183398101604081905262000026916200028f565b60008055436003556040805133815282516020808301919091528084015180518385015290810151606080840191909152818401516080808501919091529082015160a0840152015160c082015290517f5dec00131499a3d556c1283d7234d5116e8dab9e52a5ef163c718b94ea66ccf69181900360e00190a1620000ae3415600762000188565b620000ea6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b3380825260208381018051820151828501908152815160409081015181870190815283516060908101518189019081529451608090810151818a01908152600160008190554390558451978801989098529351928601929092525190840152905190820152905160a082015260c001604051602081830303815290604052600290805190602001906200017f929190620001b2565b50505062000377565b81620001ae5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001c0906200033a565b90600052602060002090601f016020900481019282620001e457600085556200022f565b82601f10620001ff57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022f57825182559160200191906001019062000212565b506200023d92915062000241565b5090565b5b808211156200023d576000815560010162000242565b60405160a081016001600160401b03811182821017156200028957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360c0811215620002a357600080fd5b604080519081016001600160401b0381118282101715620002d457634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f1983011215620002ee57600080fd5b620002f862000258565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b600181811c908216806200034f57607f821691505b602082108114156200037157634e487b7160e01b600052602260045260246000fd5b50919050565b6121ca80620003876000396000f3fe6080604052600436106100bd5760003560e01c80638323075711610079578063a7661d5411610056578063a7661d5414610184578063ab53f2c614610197578063bf2c5b24146101ba578063de736998146101cd57005b806383230757146101495780638b9fadc81461015e578063980b6eac1461017157005b80631e93b0f1146100c657806328adf537146100ea57806329bdceb9146100fd5780632c10a1591461011057806373b4522c146101235780637eea518c1461013657005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f8366004611a7a565b6101e0565b6100c461010b366004611aa4565b610433565b6100c461011e366004611aa4565b6106b0565b6100c4610131366004611aa4565b6108d0565b6100c4610144366004611aa4565b610a99565b34801561015557600080fd5b506001546100d7565b6100c461016c366004611aa4565b610ccf565b6100c461017f366004611aa4565b610ea2565b6100c4610192366004611aa4565b6110e1565b3480156101a357600080fd5b506101ac611248565b6040516100e1929190611ac7565b6100c46101c8366004611aa4565b6112e5565b6100c46101db366004611aa4565b61145c565b6101f0600d60005414602e611614565b61020a8135158061020357506001548235145b602f611614565b60008080556002805461021c90611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461024890611b24565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611c11565b90506102c181610140015143106030611614565b604080513381528335602080830191909152840135818301529083013560608201527f3355ea27a9de0a9476dc454c9992d9c8728dffbd2709023aabe4dab2336b9a6a9060800160405180910390a161031c3415602b611614565b6080810151610337906001600160a01b03163314602c611614565b604080516103849161035d91602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c82610100015114602d611614565b61038c61192e565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190910152608080860151855190851691015260a080860151855194169301929092528083018051928601359092526101208401519151015260c082015161040490600190611ccb565b6020820180516040019190915280514360609091015260e083015190516080015261042e81611639565b505050565b610443600b600054146023611614565b61045d8135158061045657506001548235145b6024611614565b60008080556002805461046f90611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461049b90611b24565b80156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b50505050508060200190518101906105009190611ce2565b90506105186040518060200160405280600081525090565b61052a82610120015143106025611614565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de8968338460405161055b929190611d7b565b60405180910390a161056f34156021611614565b60a082015161058a906001600160a01b031633146022611614565b60408201516105999043611da2565b81526040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915282516001600160a01b03908116825260208085015181840152604080860151818501526060808701519085015260808087015184169085015260a0808701519093169284019290925260c0808601519084015260e080860151908401526101008086015190840152858101356101208401528351610140840152600d60005543600155905161068591839101611dba565b604051602081830303815290604052600290805190602001906106a99291906119a4565b5050505050565b6106c06001600054146009611614565b6106da813515806106d357506001548235145b600a611614565b6000808055600280546106ec90611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461071890611b24565b80156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b505050505080602001905181019061077d9190611e5e565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516107b0929190611ee1565b60405180910390a16107c434156008611614565b61080f6040518060c0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b81516001600160a01b03168152602080830151818301526040808401518184015260608085015190840152608080850151908401523360a0840152600260005543600155516108a69183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519083015260a092830151169181019190915260c00190565b604051602081830303815290604052600290805190602001906108ca9291906119a4565b50505050565b6108e06003600054146010611614565b6108fa813515806108f357506001548235145b6011611614565b60008080556002805461090c90611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461093890611b24565b80156109855780601f1061095a57610100808354040283529160200191610985565b820191906000526020600020905b81548152906001019060200180831161096857829003601f168201915b505050505080602001905181019061099d9190611f1e565b90506109b08160c0015143106012611614565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516109e1929190611ee1565b60405180910390a16109fa81604001513414600f611614565b610a0261192e565b815181516001600160a01b0391821690526040808401805184516020908101919091526060808701518651850152608080880151875183015260a080890151885197169690910195909552855133950194909452808501805160009081905281518301529086015181519093019290925290514392019190915251610a879080611da2565b60208201516080015261042e81611639565b610aa9600260005414600d611614565b610ac381351580610abc57506001548235145b600e611614565b600080805560028054610ad590611b24565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0190611b24565b8015610b4e5780601f10610b2357610100808354040283529160200191610b4e565b820191906000526020600020905b815481529060010190602001808311610b3157829003601f168201915b5050505050806020019051810190610b669190611fbc565b9050610b7e6040518060200160405280600081525090565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610baf929190611ee1565b60405180910390a1610bc882604001513414600b611614565b60a0820151610be3906001600160a01b03163314600c611614565b6060820151610bf29043611da2565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a01518189019081526080808c0151818b0190815260a0808e01518b16818d019081528d5160c0808f0191825260036000554360015589519b8c019c909c529851978a019790975294519388019390935290519086015251908401525190931691810191909152905160e082015261010001610685565b610cdf600d600054146033611614565b610cf981351580610cf257506001548235145b6034611614565b600080805560028054610d0b90611b24565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3790611b24565b8015610d845780601f10610d5957610100808354040283529160200191610d84565b820191906000526020600020905b815481529060010190602001808311610d6757829003601f168201915b5050505050806020019051810190610d9c9190611c11565b9050610db18161014001514310156035611614565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051610de2929190611ee1565b60405180910390a1610df634156031611614565b6080810151610e46906001600160a01b03163314610e235760a08201516001600160a01b03163314610e26565b60015b610e3c5781516001600160a01b03163314610e3f565b60015b6032611614565b8060a001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f19350505050158015610e87573d6000803e3d6000fd5b5060008080556001819055610e9e90600290611a28565b5050565b610eb26009600054146019611614565b610ecc81351580610ec557506001548235145b601a611614565b600080805560028054610ede90611b24565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0a90611b24565b8015610f575780601f10610f2c57610100808354040283529160200191610f57565b820191906000526020600020905b815481529060010190602001808311610f3a57829003601f168201915b5050505050806020019051810190610f6f919061204d565b9050610f876040518060200160405280600081525090565b610f998261010001514310601b611614565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051610fca929190611d7b565b60405180910390a1610fde34156017611614565b6080820151610ff9906001600160a01b031633146018611614565b60408201516110089043611da2565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b03908116825260208085015181840152604080860151818501526060808701519085015260808087015184169085015260a0808701519093169284019290925260c0808601519084015260e08086015190840152858101356101008401528351610120840152600b600055436001559051610685918391016120dd565b6110f16003600054146014611614565b61110b8135158061110457506001548235145b6015611614565b60008080556002805461111d90611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461114990611b24565b80156111965780601f1061116b57610100808354040283529160200191611196565b820191906000526020600020905b81548152906001019060200180831161117957829003601f168201915b50505050508060200190518101906111ae9190611f1e565b90506111c28160c001514310156016611614565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516111f3929190611ee1565b60405180910390a161120734156013611614565b8060a001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610e87573d6000803e3d6000fd5b60006060600054600280805461125d90611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461128990611b24565b80156112d65780601f106112ab576101008083540402835291602001916112d6565b820191906000526020600020905b8154815290600101906020018083116112b957829003601f168201915b50505050509050915091509091565b6112f5600960005414601e611614565b61130f8135158061130857506001548235145b601f611614565b60008080556002805461132190611b24565b80601f016020809104026020016040519081016040528092919081815260200182805461134d90611b24565b801561139a5780601f1061136f5761010080835404028352916020019161139a565b820191906000526020600020905b81548152906001019060200180831161137d57829003601f168201915b50505050508060200190518101906113b2919061204d565b90506113c78161010001514310156020611614565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33836040516113f8929190611ee1565b60405180910390a161140c3415601c611614565b6080810151610e46906001600160a01b031633146114395760a08201516001600160a01b0316331461143c565b60015b6114525781516001600160a01b03163314611455565b60015b601d611614565b61146c600b600054146028611614565b6114868135158061147f57506001548235145b6029611614565b60008080556002805461149890611b24565b80601f01602080910402602001604051908101604052809291908181526020018280546114c490611b24565b80156115115780601f106114e657610100808354040283529160200191611511565b820191906000526020600020905b8154815290600101906020018083116114f457829003601f168201915b50505050508060200190518101906115299190611ce2565b905061153e816101200151431015602a611614565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338360405161156f929190611ee1565b60405180910390a161158334156026611614565b60808101516115d3906001600160a01b031633146115b05760a08201516001600160a01b031633146115b3565b60015b6115c95781516001600160a01b031633146115cc565b60015b6027611614565b80608001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f19350505050158015610e87573d6000803e3d6000fd5b81610e9e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160a08101825260008082526020808301828152938301829052606080840183905260808401929092528451820151858201805151909114845285519092015191510151149182905290611691576001611694565b60005b1515604082015280516116ab5780604001516116ae565b60005b6116b95760006116c6565b6000826020015160400151115b15611828578151604001516020830151606001516116e49190611da2565b60608083019190915260408051610120810182526000808252602082018190529181018290529182018190526080820181905260a0820181905260c0820181905260e082018190526101008201528251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151818601528651608090810151851681870152875160a09081015190951694860194909452828701805183015160c0870152519093015160e08501529184015161010084015260096000554360015590516108a69183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401519083015260808084015182169083015260a0808401519091169082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b805161183557600061183b565b80604001515b1561184c5760026080820152611878565b805161185c57806020015161185f565b60005b156118705760006080820152611878565b600160808201525b6001816080015114156118d257815180516020909101516001600160a01b03909116906108fc906118aa906002612175565b6040518115909202916000818181858888f19350505050158015610e87573d6000803e3d6000fd5b600281608001511415611909578160000151608001516001600160a01b03166108fc83600001516020015160026118aa9190612175565b815180516020909101516001600160a01b03909116906108fc906118aa906002612175565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190815260200161199f6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b8280546119b090611b24565b90600052602060002090601f0160209004810192826119d25760008555611a18565b82601f106119eb57805160ff1916838001178555611a18565b82800160010185558215611a18579182015b82811115611a185782518255916020019190600101906119fd565b50611a24929150611a65565b5090565b508054611a3490611b24565b6000825580601f10611a44575050565b601f016020900490600052602060002090810190611a629190611a65565b50565b5b80821115611a245760008155600101611a66565b600060608284031215611a8c57600080fd5b50919050565b600060408284031215611a8c57600080fd5b600060408284031215611ab657600080fd5b611ac08383611a92565b9392505050565b82815260006020604081840152835180604085015260005b81811015611afb57858101830151858201606001528201611adf565b81811115611b0d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611b3857607f821691505b60208210811415611a8c57634e487b7160e01b600052602260045260246000fd5b604051610160810167ffffffffffffffff81118282101715611b8b57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff81118282101715611b8b57634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611b8b57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611c0c57600080fd5b919050565b60006101608284031215611c2457600080fd5b611c2c611b59565b611c3583611bf5565b8152602083015160208201526040830151604082015260608301516060820152611c6160808401611bf5565b6080820152611c7260a08401611bf5565b60a082015260c0838101519082015260e0808401519082015261010080840151908201526101208084015190820152610140928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611cdd57611cdd611cb5565b500390565b60006101408284031215611cf557600080fd5b611cfd611b91565b611d0683611bf5565b8152602083015160208201526040830151604082015260608301516060820152611d3260808401611bf5565b6080820152611d4360a08401611bf5565b60a082015260c0838101519082015260e080840151908201526101008084015190820152610120928301519281019290925250919050565b6001600160a01b038316815260608101611ac0602083018480358252602090810135910152565b60008219821115611db557611db5611cb5565b500190565b81516001600160a01b0316815261016081016020830151602083015260408301516040830152606083015160608301526080830151611e0460808401826001600160a01b03169052565b5060a0830151611e1f60a08401826001600160a01b03169052565b5060c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b600060a08284031215611e7057600080fd5b60405160a0810181811067ffffffffffffffff82111715611ea157634e487b7160e01b600052604160045260246000fd5b604052611ead83611bf5565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611f0f57600080fd5b80604085015250509392505050565b600060e08284031215611f3057600080fd5b60405160e0810181811067ffffffffffffffff82111715611f6157634e487b7160e01b600052604160045260246000fd5b604052611f6d83611bf5565b815260208301516020820152604083015160408201526060830151606082015260808301516080820152611fa360a08401611bf5565b60a082015260c083015160c08201528091505092915050565b600060c08284031215611fce57600080fd5b60405160c0810181811067ffffffffffffffff82111715611fff57634e487b7160e01b600052604160045260246000fd5b60405261200b83611bf5565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015261204160a08401611bf5565b60a08201529392505050565b6000610120828403121561206057600080fd5b612068611bc3565b61207183611bf5565b815260208301516020820152604083015160408201526060830151606082015261209d60808401611bf5565b60808201526120ae60a08401611bf5565b60a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516060830152608083015161212760808401826001600160a01b03169052565b5060a083015161214260a08401826001600160a01b03169052565b5060c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600081600019048311821515161561218f5761218f611cb5565b50029056fea26469706673582212200d055f41cc0010c07fb20fd16c8c517031b94c2a4018349ac23789b26c42e21c64736f6c634300080c0033`,
  BytecodeLen: 9553,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:111:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:113:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:123:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:173:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:173:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:173:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:130:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:143:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:151:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:152:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob,
  "House": House
  };
export const _APIs = {
  };
