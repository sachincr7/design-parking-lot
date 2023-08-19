import { BaseModel } from "./base-model";
import { ParkingSpot } from "./parking-spot";

export class ParkingFloor extends BaseModel {
  private floorNo!: number;
  private parkingSpots!: ParkingSpot[];

  getFloorNo () {
    return this.floorNo;
  }

  setFloorNo (floorNo: number) {
    this.floorNo = floorNo;
  }

  getParkingSpots () {
    return this.parkingSpots;
  }

  setParkingSpots (parkingSpots: ParkingSpot[]) {
    this.parkingSpots = parkingSpots;
  }
}