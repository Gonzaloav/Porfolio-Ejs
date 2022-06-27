export const getAllGaleriasSQL = 
  `SELECT id_galerias, description FROM galerias`;

export const postGaleriasSQL = 
  `INSERT INTO galerias (id_galerias, description) VALUES (?,?)`;

export const putGaleriasSQL = 
  `UPDATE galerias SET description = ? WHERE id_galerias = ?`;

export const deleteGaleriasSQL =
  `DELETE FROM galerias WHERE id_galerias = ?`;



  
export const getOneGaleriasByIdSQL =
  `SELECT id_galerias, description FROM galerias`;