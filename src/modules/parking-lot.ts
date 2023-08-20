import { BaseModel } from "./base-model";
import { Gate } from "./gate";
import { ParkingFloor } from "./parking-floor";

export class ParkingLot extends BaseModel {
	private parkingFloors!: ParkingFloor[];
	private gates!: Gate[];
	private capacity!: number;

	getParkingFloors(): ParkingFloor[] {
		return this.parkingFloors;
	}

	getGates(): Gate[] {
		return this.gates;
	}

	getCapacity(): number | null {
		return this.capacity;
	}

	setParkingFloors(parkingFloors: ParkingFloor[]) {
		this.parkingFloors = parkingFloors;
	}

	setGates(gates: Gate[]) {
		this.gates = gates;
	}

	setCapacity(capacity: number) {
		this.capacity = capacity;
	}
}
