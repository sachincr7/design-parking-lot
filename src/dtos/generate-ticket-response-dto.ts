import { VehicleType } from "../modules/vehicle-type";

export class GenerateTicketRequestDto {
  vehicleNumber!: string;
  vehicleType!: VehicleType;
  gateId!: number;

  getVehicleNumber (): string {
    return this.vehicleNumber;
  }

  setVehicleNumber (vehicleNumber: string) {
    this.vehicleNumber = vehicleNumber;
  }
  
  getVehiclType (): VehicleType {
    return this.vehicleType;
  }

  setVehiclType (vehicleType: VehicleType) {
    this.vehicleType = vehicleType;
  }
  
  getGateId (): number {
    return this.vehicleType;
  }

  setGateId (vehicleType: VehicleType) {
    this.vehicleType = vehicleType;
  }
}