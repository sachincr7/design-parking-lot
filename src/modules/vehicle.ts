import { BaseModel } from "./base-model";
import { VehicleType } from "./vehicle-type";

export class Vehicle extends BaseModel {
  private vehicleNumber!: string;
	private vehicleType!: VehicleType;

	getVehicleNumber (): string {
		return this.vehicleNumber
	}

	setVehicleNumber (vehicleNumber: string) {
		this.vehicleNumber = vehicleNumber;
	}

	getVehicleType (): VehicleType {
		return this.vehicleType;
	}

	setVehicleType (vehicleType: VehicleType) {
		this.vehicleType = vehicleType;
	}
}