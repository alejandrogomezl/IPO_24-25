// src/app/models/vehicle.model.ts
export interface Vehicle {
    _id: string;
    make: string;
    model: string;
    price: number;
    capacity: number;
    fuelType: string;
    transmission: string;
    engine: string;
    inventoryCount: number;
    createdAt: Date;
  }  