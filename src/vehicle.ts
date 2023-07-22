import { VehicleType } from "./vehicle-type";

export class Vehicle {
  private vehicleNumber: string;
	private vehicleType: VehicleType;

	constructor (vehicleNumber: string, vehicleType: VehicleType) {
		this.vehicleNumber = vehicleNumber;
		this.vehicleType = vehicleType;
	}

	getVehicleNumber (): string {
		return this.vehicleNumber
	}

	getVehicleType (): VehicleType {
		return this.vehicleType;
	}

	setVehicleNumber (vehicleNumber: string) {
		this.vehicleNumber = vehicleNumber;
	}

	setVehicleType (vehicleType: VehicleType) {
		this.vehicleType = vehicleType;
	}
}