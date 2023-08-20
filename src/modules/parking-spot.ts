import { BaseModel } from "./base-model";
import { SpotStatus } from "./spot-status";
import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicle-type";

export class ParkingSpot extends BaseModel {
	
	private spotNumber!: number;
	private supportedVehicles!: VehicleType[];
  private spotStatus!: SpotStatus;
  private vehicle!: Vehicle;

	getSpotNumber(): number {
		return this.spotNumber;
	}

	getSupportedVehicles(): VehicleType[] {
		return this.supportedVehicles;
	}

	getSpotStatus(): SpotStatus {
		return this.spotStatus;
	}

	getVehicle(): Vehicle {
		return this.vehicle;
	}

	setSpotNumber(spotNumber: number) {
		this.spotNumber = spotNumber;
	}

	setSupportedVehicles(supportedVehicles: VehicleType[]) {
		this.supportedVehicles = supportedVehicles;
	}

	setSpotStatus(status: SpotStatus) {
		this.spotStatus = status;
	}

  setVehicle(vehicle: Vehicle) {
		this.vehicle = vehicle;
	}
}