import { GateStatus } from "./gate-status";
import { GateType } from "./gate-type";
import { Operator } from "./operator";

export class Gate {
	private gateNumber: number;
	private operator: Operator;
  private gateStatus: GateStatus;
  private gateType: GateType;

	constructor (gateNumber: number, operator: Operator, gateStatus: GateStatus, gateType: GateType) {
		this.gateNumber = gateNumber;
		this.operator = operator;
		this.gateStatus = gateStatus;
		this.gateType = gateType;
	}

	getGateNumber(): number {
		return this.gateNumber;
	}

	getOperator(): Operator {
		return this.operator;
	}

	getGateStatus(): GateStatus {
		return this.gateStatus;
	}

	getGateType(): GateType {
		return this.gateType;
	}

	setGateNumber(gateNumber: number) {
		this.gateNumber = gateNumber;
	}

	setOperator(operator: Operator) {
		this.operator = operator;
	}

	setGateStatus(status: GateStatus) {
		this.gateStatus = status;
	}

  setGateType(type: GateType) {
		this.gateType = type;
	}
}
