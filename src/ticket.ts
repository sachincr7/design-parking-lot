import { Gate } from "./gate";
import { Operator } from "./operator";
import { ParkingSpot } from "./parking-spot";
import { Vehicle } from "./vehicle";

export class Ticket {
	private parkingSpot: ParkingSpot;
  private vehicle: Vehicle;
  private gate: Gate;
	private operator: Operator;
	private entryTime: Date;

	constructor (
		parkingSpot: ParkingSpot,
		gate: Gate,
		operator: Operator,
		vehicle: Vehicle,
		entryTime: Date,
	) {
		this.parkingSpot = parkingSpot;
		this.gate = gate;
		this.operator = operator;
		this.vehicle = vehicle;
		this.entryTime = entryTime;
	}

	getParkingSpot(): ParkingSpot {
		return this.parkingSpot;
	}

	getGate(): Gate {
		return this.gate;
	}

	getOperator(): Operator {
		return this.operator;
	}

	getVehicle(): Vehicle {
		return this.vehicle;
	}
	
	getEntryTime(): Date {
		return this.entryTime;
	}

	setParkingSpot(parkingSpot: ParkingSpot) {
		this.parkingSpot = parkingSpot;
	}

	setGate(gate: Gate) {
		this.gate = gate;
	}

	setOperator(operator: Operator) {
		this.operator = operator;
	}

  setVehicle(vehicle: Vehicle) {
		this.vehicle = vehicle;
	}
  
	setEntryTime(entryTime: Date) {
		this.entryTime = entryTime;
	}
}
