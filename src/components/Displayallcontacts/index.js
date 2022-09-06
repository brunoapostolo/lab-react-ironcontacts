import DisplayEachContact from "../display";

function DisplayAllContacts ({lista}){
    return(
        <>
            {lista.map((celebridade)=>{
                return <DisplayEachContact famoso={celebridade}/>
            })}
        </>
    )
}
export default DisplayAllContacts