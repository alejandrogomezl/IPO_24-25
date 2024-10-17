// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/users');
const app = express();

const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const repairRoutes = require('./routes/repairRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const promotionRoutes = require('./routes/promotionRoutes');


app.use(cors()); // Permitir peticiones desde otro dominio (Angular)
app.use(express.json()); // Parsear JSON
app.use('/api/users', userRoutes);  // Añadimos las rutas de usuarios


// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/carup', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error(err));

//Rutas
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/repairs', repairRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/promotions', promotionRoutes);

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
