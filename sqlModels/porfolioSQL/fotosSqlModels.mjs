

export const getAllFotosSQL = 
    `SELECT  id_fotos, file, galeria_fotos FROM fotos`;

export const getGalleryFotosSQL = 
    `SELECT  id_fotos, file, galeria_fotos FROM fotos WHERE galeria_fotos = ?`;


export const postFotosSQL = 
    //`INSERT INTO fotos (id_fotos, file, galeria_fotos) VALUES (?, ?, ?)`;
    `INSERT INTO fotos (file, galeria_fotos) VALUES (?, ?)`;

export const putFotosSQL = 
    `UPDATE fotos SET id_fotos = ?, file = ? WHERE galeria_fotos = ?`;

export const deleteFotosSQL = 
    `DELETE FROM fotos WHERE galeria_fotos = ?`;
 
// export const getOneFotosByIdSQL = `SELECT  id_fotos, file, galeria_fotos FROM fotos`;