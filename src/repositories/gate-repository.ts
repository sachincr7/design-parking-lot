import { Gate } from "../modules/gate";
import { IGateRepository } from "./IGate-repository";

export class GateRepository implements IGateRepository {
  private gates: Map<number, Gate>;

  constructor () {
    this.gates = new Map<number, Gate>();
  }

  findGateById (gateId: number): Gate | null {
    return this.gates.get(gateId) ?? null;
  }
}