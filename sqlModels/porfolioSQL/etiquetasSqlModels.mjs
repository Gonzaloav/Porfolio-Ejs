export const getAllEtiquetasSQL = 
  `SELECT id_etiquetas, description, ref, galeria FROM etiquetas`;

export const postEtiquetasSQL = 
  `INSERT INTO etiquetas (id_etiquetas, description, ref, galeria)   VALUES (?, ?, ?, ?)`;

export const putEtiquetasSQL = 
  `UPDATE etiquetas SET id_etiquetas =?, description = ?, ref = ? WHERE galeria =?`;

export const deleteEtiquetasSQL =
  `DELETE FROM etiquetas WHERE galeria = ?`;

export const getOneEtiquetasByIdSQL =
  `SELECT id_etiquetas, description, ref, galeria FROM etiquetas`;