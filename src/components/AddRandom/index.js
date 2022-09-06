import { useState } from "react"
import DisplayEachContact from "../display"
import contacts from "../../contacts.json"
import DisplayAllContacts from "../Displayallcontacts"



function AddRandom(){
    const [qualquerum , setRandom] = useState(10)
    const [lista, setLista] = useState(contacts.slice(0,5))



    function aleatorio (e){
        e.preventDefault()
        setRandom(Math.floor(Math.random()*contacts.length))
        setLista([contacts[qualquerum],... lista ])
    }

    return(
        <>
            <button onClick={aleatorio}>Gere o perfil de um famoso aleatório</button>
            <DisplayAllContacts lista={lista}/>
        </>
    )
}
export default AddRandom