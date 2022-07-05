export const getAllFotosSQL = `SELECT  id_fotos, file, galeria_fotos FROM fotos`;

// Para galeria con filas en server. Recibir las fotos y ponerlas en filas.
export const getGalleryFotosSQL = `SELECT  id_fotos, file, galeria_fotos, ratio, orden FROM fotos WHERE galeria_fotos = ? ORDER BY orden`;

//`INSERT INTO fotos (id_fotos, file, galeria_fotos) VALUES (?, ?, ?)`;
export const postFotosSQL =`INSERT INTO fotos (file, ratio, galeria_fotos, orden) VALUES (?, ?, ?, ?)`;

export const putFotosSQL = `UPDATE fotos SET id_fotos = ?, file = ? WHERE galeria_fotos = ?`;

export const deleteFotosSQL = `DELETE FROM fotos WHERE galeria_fotos = ?`;

// export const getOneFotosByIdSQL = `SELECT  id_fotos, file, galeria_fotos FROM fotos`;
