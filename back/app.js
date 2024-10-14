// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/users');
const app = express();


app.use(cors()); // Permitir peticiones desde otro dominio (Angular)
app.use(express.json()); // Parsear JSON
app.use('/api/users', userRoutes);  // Añadimos las rutas de usuarios


// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mi-base-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error(err));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡API funcionando!');
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
