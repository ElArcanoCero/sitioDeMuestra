const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/miapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Modelo de Usuario
const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Ruta de Registro
app.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
        return res.json({ success: false, message: 'El usuario ya existe' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const usuario = new Usuario({ nombre, email, password: hashedPassword });
    await usuario.save();

    // Crear y enviar token
    const token = jwt.sign({ userId: usuario._id }, 'mi_secreto');
    res.json({ success: true, token });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
