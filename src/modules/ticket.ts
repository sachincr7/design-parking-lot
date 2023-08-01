import { BaseModel } from "./base-model";
import { Gate } from "./gate";
import { Operator } from "./operator";
import { ParkingSpot } from "./parking-spot";
import { Vehicle } from "./vehicle";

export class Ticket extends BaseModel {
	private parkingSpot!: ParkingSpot;
  private vehicle!: Vehicle;
  private gate!: Gate;
	private operator!: Operator;
	private entryTime!: Date;

	getParkingSpot(): ParkingSpot {
		return this.parkingSpot;
	}

	setParkingSpot(parkingSpot: ParkingSpot) {
		this.parkingSpot = parkingSpot;
	}

	getGate(): Gate {
		return this.gate;
	}

	setGate(gate: Gate) {
		this.gate = gate;
	}

	getOperator(): Operator {
		return this.operator;
	}

	setOperator(operator: Operator) {
		this.operator = operator;
	}

	getVehicle(): Vehicle {
		return this.vehicle;
	}

	setVehicle(vehicle: Vehicle) {
		this.vehicle = vehicle;
	}
	
	getEntryTime(): Date {
		return this.entryTime;
	}

	setEntryTime(entryTime: Date) {
		this.entryTime = entryTime;
	}
}
