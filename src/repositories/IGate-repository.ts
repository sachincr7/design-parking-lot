import { Gate } from "../modules/gate";

export interface IGateRepository {
  findGateById (gateId: number): Gate | null;
}