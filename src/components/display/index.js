import trofeu from "../../assets/1f3c6.png"

function DisplayEachContact ({famoso,setLista,lista}){
    function deletarFamoso(){
        let filtradoDelete = lista.filter((element)=>{
            return element.name!==famoso.name
        })
        setLista(filtradoDelete)

    }
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
            <button style={{height:"90px", alignItems:'center', margin:"auto"}} onClick={deletarFamoso}>Delete</button>
        </div>
    )
}
export default DisplayEachContact