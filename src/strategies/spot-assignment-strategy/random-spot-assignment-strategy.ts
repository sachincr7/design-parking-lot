import { Gate } from "../../modules/gate";
import { ParkingLot } from "../../modules/parking-lot";
import { ParkingSpot } from "../../modules/parking-spot";
import { SpotStatus } from "../../modules/spot-status";
import { VehicleType } from "../../modules/vehicle-type";
import { SpotAssignmentStrategy } from "./spot-assignment-strategy";

export class RandomSpotAssignmentStrategy implements SpotAssignmentStrategy {
  findSpot(vehicleType: VehicleType, parkingLot: ParkingLot, entryGate: Gate): ParkingSpot | null {
    for (let parkingFloor of parkingLot.getParkingFloors()) {
      for (let parkingSpot of parkingFloor.getParkingSpots()) {
        console.log('parkingSpot', parkingSpot.getSpotStatus(), parkingSpot, SpotStatus.AVAILABLE);
        if (parkingSpot.getSpotStatus() === SpotStatus.AVAILABLE
          && parkingSpot.getSupportedVehicles().indexOf(vehicleType) !== -1) {
            return parkingSpot
          }
      }
    }
    return null;
  }
}