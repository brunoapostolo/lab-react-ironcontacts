import DisplayEachContact from "../display";

function DisplayAllContacts ({lista,setLista}){
    
    return(
        <>
            {lista.map((celebridade)=>{
                return (
                    <>
                        <DisplayEachContact famoso={celebridade}/>
                        <button  >delete</button>
                    </>
                )
                
            })}
        </>
    )
}
export default DisplayAllContacts