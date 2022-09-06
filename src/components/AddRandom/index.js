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


    function ordemAlfabetica(e){
        e.preventDefault()
        setLista([...lista].sort((a,b)=>{
            return a.name.localeCompare(b.name);
        }))
    }
    function sortByPopularity(e){
        e.preventDefault()
        setLista([...lista].sort((a,b)=>{
            return a.popularity - b.popularity;
        }))
    }
    console.log(lista[0].name)

    return(
        <>
            <button onClick={sortByPopularity}>Sort by popularity</button>
            <button onClick={ordemAlfabetica}>Sort by name</button>
            <button onClick={aleatorio}>Gere o perfil de um famoso aleatório</button>
            <DisplayAllContacts lista={lista} setLista={setLista}/>
        </>
    )
}
export default AddRandom