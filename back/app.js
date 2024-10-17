// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const userRoutes = require('./src/routes/userRoutes');
const vehicleRoutes = require('./src/routes/vehicleRoutes');
const repairRoutes = require('./src/routes/repairRoutes');
const inventoryRoutes = require('./src/routes/inventoryRoutes');
const invoiceRoutes = require('./src/routes/invoiceRoutes');
const promotionRoutes = require('./src/routes/promotionRoutes.js');


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
