function FotosMiniatura({images}){

    return(

       <ul className="Container2">{images.map(
             (item)=>
            <li>
                <img className={item.style +" imgs"} 
                src={"http://localhost:3000/uploads/"+item.name} alt="hola" />
            </li>
        )}
        </ul>
    
    )
    }
    export default FotosMiniatura;