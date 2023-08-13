import { VehicleType } from "../modules/vehicle-type";

export class GenerateTicketRequestDto {
  private vehicleNumber!: string;
  private vehicleType!: VehicleType;
  private gateId!: number;

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
    return this.gateId;
  }

  setGateId (gateId: number) {
    this.gateId = gateId;
  }
}