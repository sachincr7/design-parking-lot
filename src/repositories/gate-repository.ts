import { Gate } from "../modules/gate";
import { IGateRepository } from "./IGate-repository";

export class GateRepository implements IGateRepository {
  private gates: Map<number, Gate> = new Map<number, Gate>();
  private lastSavedId = 1;

  findGateById (gateId: number): Gate | null {
    return this.gates.get(gateId) ?? null;
  }

  save (gate: Gate): Gate {
    gate.setId(this.lastSavedId);
    this.gates.set(this.lastSavedId, gate);
    this.lastSavedId += 1;
    return gate;
  }
}