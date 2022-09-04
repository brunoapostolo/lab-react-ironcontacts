function DisplayContacts ({famoso}){
    return (
        <div style={{display:"flex"}, {flexDirection: "row"}} className="linha">
            <div className="coluna">
                <h1>Picture</h1>
                <img style={{height:"50px"}} src={famoso.pictureUrl} alt=""/>
            </div>
            <div className="coluna">
                <h2>Name</h2>
                <p> {famoso.name}</p>
            </div>
            <div className="coluna">
                <h2>Popularity</h2>
                <p>{famoso.popularity}</p>
            </div>
            <div>
                <h2>Won Oscar</h2>
                {famoso.wonOscar &&
                <p>Esse famoso ganhou o oscar</p>
                }
            </div>
                <h2>Won Emmy</h2>
                {famoso.wonEmmy &&
                <p>Esse famoso ganhou Emmy</p>}
        </div>
    )
}
export default DisplayContacts