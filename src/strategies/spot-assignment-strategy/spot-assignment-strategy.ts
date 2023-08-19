import { ParkingSpot } from "../../modules/parking-spot";

export interface SpotAssignmentStrategy {
  findSpot(): ParkingSpot;
}