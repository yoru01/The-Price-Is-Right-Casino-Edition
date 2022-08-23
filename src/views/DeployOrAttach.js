import { useState } from "react";

export function DeployOrAttach({ setAsAlice, deploy }){
    const [ wager, setWager ] = useState(0)
    const [ limit, setLimit ] = useState(5)
    const [ trials, setTrials ] = useState(1)
    const [ d, setD ] = useState(false)
    return(
        <div className="center">
            {
                d ? 
                <>
                    <div className="form-row">
                        <label className="flex-50">Wager: </label>
                        <input
                            className="flex-50"
                            type={'number'}
                            value={wager}
                            onChange={e => setWager(e.target.value)}
                        />
                    </div>

                    <div className="form-row">
                        <label className="flex-50">Number of trials: </label>
                        <input
                            className="flex-50"
                            type={'number'}
                            value={trials}
                            onChange={e => setTrials(e.target.value)}
                        />
                    </div>

                    <div className="form-row">
                        <label className="flex-50">Limit: </label>
                        <input
                            className="flex-50"
                            type={'number'}
                            value={limit}
                            onChange={e => setLimit(e.target.value)}
                        />
                    </div>

                    <button onClick={() => deploy(parseFloat(wager), parseInt(limit), parseInt(trials))}>Deploy</button>
                    
                </>
                :
                <>
                    <button
                        onClick={() => setD(true)}
                    >Deploy new contract</button><br/>
                    
                    <button
                        onClick={() => setAsAlice()}
                    >Attach as Alice</button>
                    
                    <button
                        onClick={() => setAsAlice(false)}
                    >Attach as Bob</button>
                </>
            }
            
        </div>
    );
};