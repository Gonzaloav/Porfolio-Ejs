import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./porfolio.db', (err) => {
    if (err) {
        throw err.message;
    }
    console.log('Conencta el proyecto de tareas con la base de datos');
});

// tres tablas para porfolio.

db.run(`
    CREATE TABLE
        IF NOT EXISTS
       etiquetas (
            galeria INTEGER PRIMARY KEY,
            id_etiquetas INTEGER NOT NULL,
            description VARCHAR(255) NOT NULL,
            ref INTEGER NOT NULL     
        )
`);

 
 db.run(`
    CREATE TABLE
        IF NOT EXISTS
        galerias(
            id_galerias INTEGER PRIMARY KEY,
            description VARCHAR(255) NOT NULL   
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        fotos(
            id_fotos INTEGER PRIMARY KEY,
             file VARCHAR (255) NOT NULL,
             ratio CHAR(5),
             galeria_fotos INTEGER NOT NULL,
             orden INTEGER NOT NULL
             
        )
`);

// Tabla para Usuarios. 

db.run (`   
    CREATE TABLE
        IF NOT EXISTS
        users(
            users_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            password TEXT NOT NULL
    )
`);






/* En caso de varios usuarios 
db.run(`     CREATE TABLE        IF NOT EXISTS       tasks (
 id INTEGER PRIMARY KEY,         description VARCHAR(100) NOT NULL,
done BOOLEAN DEFAULT false NOT NULL,        id_user INTEGER NOT NULL,
FOREIGN KEY ( id_user )          REFERENCES users (id) 
ON DELETE CASCADE               ON UPDATE CASCADE   )   `);     



export function sqlCallback (error, data) {
    console.log("error:", error, "data:", data);
    if ( error ) throw error;
}

export function findUser ( name, password, callback ) {
    db.get(`
        SELECT id
        FROM users
        WHERE name = "${name}" AND password = "${password}"
        `,
        callback
    )
}

export function findSource ( source, password, callback ) {
    db.get(`
        SELECT id
        FROM users
        WHERE id = "${source}" AND password = "${password}"
        `,
        callback
    )
}

export function insertUser ( userObject, callback ) {
    const { id, name, password } = userObject;
    const sql = `
        INSERT INTO users (id, name, password)
        values (${id}, "${name}", "${password}");
    `;
    db.run(sql,callback);
}

export function getUsers ( callback ) {
    db.all("SELECT id, name FROM users", callback);
}

export function insertMessage ( messageObject, callback) {
    const {id, descrption, done } = messageObject;
    const sql = `
        INSERT INTO messages (id, description, done)
        values (${id}, ${descrption}, "${done}");
    `;
    db.run(sql,callback);
}

export function getLastMessages (minutes, callback) {
    const afterTime = Date.now() - 60000 * minutes;
    db.all(`
        SELECT *
        FROM tasks
        WHERE time >= ${afterTime}
        `,
        callback
    )
}*/


export default db;