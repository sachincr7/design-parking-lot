import { SpotStatus } from "./spot-status";
import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicle-type";

export class ParkingSpot {
	private spotNumber: number;
	private supportedVehicles: VehicleType[];
  private spotStatus: SpotStatus;
  private vehicle: Vehicle;

	constructor (
		spotNumber: number,
		supportedVehicles: VehicleType[],
		spotStatus: SpotStatus,
		vehicle: Vehicle
	) {
		this.spotNumber = spotNumber;
		this.supportedVehicles = supportedVehicles;
		this.spotStatus = spotStatus;
		this.vehicle = vehicle;
	}

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

	setSupportedVehicles(vehicleType: VehicleType) {
		this.supportedVehicles.push(vehicleType);
	}

	setSpotStatus(status: SpotStatus) {
		this.spotStatus = status;
	}

  setVehicle(vehicle: Vehicle) {
		this.vehicle = vehicle;
	}
}
