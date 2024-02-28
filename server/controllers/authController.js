const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../config/db');
const { jwtSecret } = require('../config/config');


// Función para registrar un nuevo usuario
const register = (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ?';

    db.get(query, [username], (err, row) => {
        if (err) {
            return res.status(500).send('Error en la base de datos');
        } 
        if (row) {
            return res.status(409).send('El nombre de usuario ya está en uso');
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).send('Error al encriptar la contraseña');
            }

            const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
            db.run(insertQuery, [username, hash], function(error) {
                if (error) {
                    return res.status(500).send('Error al registrar el usuario');
                }
                res.status(200).send('Usuario registrado correctamente');
            });
        });
    });
};

// Función para iniciar sesión
const login = (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT username, password FROM users WHERE username = ?';

    db.get(query, [username], (err, user) => {
        if (err) {
            return res.status(500).send('Error en la base de datos');
        } 
        if (!user) {
            return res.status(401).send('Usuario no encontrado');
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error('Error al comparar la contraseña:', err);
                return res.status(500).send('Error al procesar la solicitud');
            }
            if (result) {
                   // Se incluye el username en el payload del token
                const token = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: '1d' });
                res.json({ token });
            } else {
                res.status(401).send('Contraseña incorrecta');
            }
        });
    });
};

module.exports = {
    register,
    login
};