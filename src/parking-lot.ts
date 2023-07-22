import { Gate } from "./gate";
import { ParkingFloor } from "./parking-floor";

export class ParkingLot {
	private parkingFloors: ParkingFloor[] = [];
	private gates: Gate[] = [];
	private capacity: number;

	constructor (
		parkingFloors: ParkingFloor[],
		gates: Gate[],
		capacity: number,
	) {
		this.parkingFloors = parkingFloors;
		this.gates = gates;
		this.capacity = capacity;
	}

	getParkingFloors(): ParkingFloor[] {
		return this.parkingFloors;
	}

	getGates(): Gate[] {
		return this.gates;
	}

	getCapacity(): number {
		return this.capacity;
	}

	setParkingFloors(floor: ParkingFloor) {
		this.parkingFloors.push(floor);
	}

	setGates(gate: Gate) {
		this.gates.push(gate);
	}

	setCapacity(capacity: number) {
		this.capacity = capacity;
	}
}
