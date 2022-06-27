import FotosMiniatura from "./fotosminiaturas.mjs";
import { FotosRetrato } from "./Galeria.mjs";
const fotos=[]
for (let i = 0; i < FotosRetrato.length; i=i+4) {
    const fila = []
    for ( let foto= 0; foto< 4; foto++){
        if(FotosRetrato.length>i+foto){
        fila.push(FotosRetrato[i+foto]);}
    }
    fotos.push(fila)
}
 return (
  
<ul className="container">{fotos.map(
    (item)=>
    <FotosMiniatura images={item}/> 
    
)}</ul> 

);
