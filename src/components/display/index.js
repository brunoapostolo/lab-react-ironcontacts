import trofeu from "../../assets/1f3c6.png"

function DisplayEachContact ({famoso}){
    return (
        <div style={{display:"flex" , flexDirection: "row"}} className="linha">
            <div style={{display: "flex", flexDirection:"column", margin:"20px"}} className="coluna">
                <h2>Picture</h2>
                <img style={{height:"120px", width:"80px"}} src={famoso.pictureUrl} alt=""/>
            </div>
            <div style={{display: "flex", flexDirection:"column", margin:"20px"}} className="coluna">
                <h2>Name</h2>
                <p> {famoso.name}</p>
            </div>
            <div style={{display: "flex", flexDirection:"column", margin:"20px"}} className="coluna">
                <h2>Popularity</h2>
                <p>{famoso.popularity}</p>
            </div>
            <div style={{display: "flex", flexDirection:"column", margin:"20px"}}>
                <h2>Won Oscar</h2>
                {famoso.wonOscar &&
                <img style={{height:"80px", width:"80px"}} src={trofeu}/>
                }
            </div >
            <div style={{display: "flex", flexDirection:"column", margin:"20px"}}>
                <h2>Won Emmy</h2>
                {famoso.wonEmmy &&
                <img style={{height:"80px", width:"80px"}} src={trofeu}/>}
            </div>
        </div>
    )
}
export default DisplayEachContact