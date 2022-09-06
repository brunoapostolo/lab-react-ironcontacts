import DisplayEachContact from "../display";

function DisplayAllContacts ({lista,setLista}){
    
    return(
        <>
            {lista.map((celebridade)=>{
                return (
                    <>
                        <DisplayEachContact famoso={celebridade} setLista={setLista} lista={lista} />
                    </>
                )
                
            })}
        </>
    )
}
export default DisplayAllContacts