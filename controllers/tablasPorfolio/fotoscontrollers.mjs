import db from "../../sqlModels/db.mjs";
import { postFotosSQL, getAllFotosSQL } from "../../sqlModels/porfolioSQL/fotosSqlModels.mjs"

// Añadir fotos
export function postFotosController(request, response) {
    try {
      db.run(
        postFotosSQL,
          [
              request.body.id_fotos,
              request.body.file,
              request.body.ratio,
              request.body.galeria_fotos,
          ],
          (err)=>{
              if (err) throw err
              else response.sendStatus(201);
          }
      )
  } catch (err) {
      requestError(err, response)
  }
}

// Obtiene lista fotos
export function getAllFotosController(request, response) {
    try {
      db.all(
        getAllFotosSQL, 
          (err,data)=>{
              if ( err ) throw err
              return data
          }
      )
    } catch (err) {
        requestError(err, response)
      }
} 
  