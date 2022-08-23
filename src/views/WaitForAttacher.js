export function WaitForAttacher({contractInfo}){
    return(
        <div>
            <h2>Contract Address</h2>
            <textarea value={contractInfo} disabled/>
        </div>
    )
}