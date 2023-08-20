import { Vehicle } from "../modules/vehicle";

export class VehicleRepository {
  private vehicles: Map<string, Vehicle> = new Map();
  private lastSavedId = 1;

  findVehicleById (vehicleNumber: string): Vehicle | null {
    return this.vehicles.get(vehicleNumber) ?? null;
  }

  save (vehicleNumber: string, vehicle: Vehicle): Vehicle {
    vehicle.setId(this.lastSavedId);
    this.vehicles.set(vehicleNumber, vehicle);
    this.lastSavedId += 1;
    return vehicle;
  }
}