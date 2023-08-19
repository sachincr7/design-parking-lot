import { Gate } from "../modules/gate";
import { ParkingLot } from "../modules/parking-lot";

export class ParkingLotRepository {
  private parkingLots: Map<number, ParkingLot> = new Map();

  getParkingLotOfGate(gate: Gate): ParkingLot | null {
    for (const parkingLot of this.parkingLots.values()) {
      if (parkingLot.getGates().some((g) => g.getId() === gate.getId())) {
        return parkingLot;
      }
    }
    return null;
  }
}