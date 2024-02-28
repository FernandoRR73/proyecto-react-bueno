// Importar el módulo sqlite3
const sqlite3 = require('sqlite3').verbose();

// Función para inicializar la base de datos
const initializeDatabase = () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT,
                    password TEXT,
                    role TEXT DEFAULT 'basic'
                )`);
    });
};

// Crear o abrir la base de datos
let db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
        initializeDatabase(); // Llama a la función después de abrir la base de datos correctamente
    }
});

// Exportar la instancia de la base de datos para su uso en otras partes de la aplicación
module.exports = db;
