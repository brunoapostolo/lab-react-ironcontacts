import { useState } from "react"
import DisplayContacts from "../display"

function AddRandom({famosos}){
    const [qualquerum , setRandom] = useState(10)

    function aleatorio (){
        setRandom(Math.floor(Math.random()*famosos.length))
    }

    return(
        <>
            <button onClick={aleatorio}>Clique aqui</button>
            <DisplayContacts famoso={famosos[qualquerum]}/>
        </>
    )
}
export default AddRandom