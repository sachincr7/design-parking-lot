import { Gate } from "../../modules/gate";
import { ParkingLot } from "../../modules/parking-lot";
import { ParkingSpot } from "../../modules/parking-spot";
import { VehicleType } from "../../modules/vehicle-type";

export interface SpotAssignmentStrategy {
  findSpot(vehicleType: VehicleType, parkingLot: ParkingLot, entryGate: Gate): ParkingSpot | null;
}