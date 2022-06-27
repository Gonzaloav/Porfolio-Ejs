function FotosMiniatura({images}){

    return(

       <ul className="container2">{images.map(
             (item)=>
            <li>
                <img className={item.style +" imgs"} 
                src={"http://localhost:4000/images/"+item.name} alt="hola" />
            </li>
        )}
        </ul>
    
    )
    }
    export default FotosMiniatura;