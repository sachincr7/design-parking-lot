import { BaseModel } from "./base-model";
import { Gate } from "./gate";
import { Operator } from "./operator";
import { Ticket } from "./ticket";

export class Bill extends BaseModel {
  private exitTime!: Date;
  private ticket!: Ticket;
  private operator!: Operator;
  private gate!: Gate;
  private amount!: number;
 
	getExitTime (): Date {
		return this.exitTime;
	}

	setExitTime (exitTime: Date) {
		this.exitTime = exitTime;
	}

	getTicket (): Ticket {
		return this.ticket;
	}

	setTicket (ticket: Ticket) {
		this.ticket = ticket;
	}

	getOperator (): Operator {
		return this.operator;
	}

	setOperator (operator: Operator) {
		this.operator = operator;
	}

	getGate (): Gate {
		return this.gate;
	}

	setGate (gate: Gate) {
		this.gate = gate;
	}
	
	getAmount (): number {
		return this.amount;
	}

	setAmount (amount: number) {
		this.amount = amount;
	}
}