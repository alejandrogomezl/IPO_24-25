const axios = require('axios');
const { faker } = require('@faker-js/faker');

// Función para generar 100 vehículos
function generateVehicles(count = 100) {
  const vehicles = [];
  const makes = ["Koenigsegg", "Toyota", "Ford", "Chevrolet", "Honda", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Volkswagen"];
  const models = ["Agera", "Corolla", "Mustang", "Camaro", "Civic", "Altima", "M3", "S-Class", "A4", "Golf"];
  const fuelTypes = ["Gasolina", "Diésel", "Eléctrico", "Híbrido"];
  const transmissions = ["Manual", "Automático"];
  const engines = ["V6", "V8", "V12", "Eléctrico", "Híbrido"];

  for (let i = 0; i < count; i++) {
    const vehicle = {
      make: makes[Math.floor(Math.random() * makes.length)],
      model: models[Math.floor(Math.random() * models.length)],
      price: faker.commerce.price(20000, 150000, 0),
      capacity: faker.number.int({ min: 2, max: 8 }),
      fuelType: fuelTypes[Math.floor(Math.random() * fuelTypes.length)],
      transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
      engine: engines[Math.floor(Math.random() * engines.length)],
      inventoryCount: faker.number.int({ min: 1, max: 20 }),
      image: faker.image.url({ width: 640, height: 480, category: 'vehicle', randomize: true })
    };
    vehicles.push(vehicle);
  }
  return vehicles;
}

// Enviar cada vehículo individualmente
async function sendVehiclesToAPI() {
  const vehicles = generateVehicles(100);

  for (const vehicle of vehicles) {
    try {
      const response = await axios.post('http://localhost:3000/api/vehicles', vehicle);
      console.log('Vehículo enviado exitosamente:', response.data);
    } catch (error) {
      console.error('Error al enviar vehículo:', error.message);
    }
  }
}

// Llamar a la función para enviar los vehículos
sendVehiclesToAPI();
