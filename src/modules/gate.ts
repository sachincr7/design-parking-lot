import { BaseModel } from "./base-model";
import { GateStatus } from "./gate-status";
import { GateType } from "./gate-type";
import { Operator } from "./operator";

export class Gate extends BaseModel {
	private gateNumber!: number;
	private currentOperator!: Operator;
  private gateStatus!: GateStatus;
  private gateType!: GateType;

	getGateNumber(): number {
		return this.gateNumber;
	}

	getOperator(): Operator {
		return this.currentOperator;
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
		this.currentOperator = operator;
	}

	setGateStatus(status: GateStatus) {
		this.gateStatus = status;
	}

  setGateType(type: GateType) {
		this.gateType = type;
	}
}
