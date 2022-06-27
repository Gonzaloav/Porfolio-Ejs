import db from "../../sqlModels/db.mjs";
import { postFotosSQL } from "../../sqlModels/porfolioSQL/fotosSqlModels.mjs"

// Añadir fotos
export function postFotosController(request, response) {
    try {
      db.run(
        postFotosSQL,
          [
              request.body.id_fotos,
              request.body.file,
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