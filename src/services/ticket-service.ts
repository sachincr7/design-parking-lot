import { Ticket } from "../modules/ticket";
import { VehicleType } from "../modules/vehicle-type";

export class TicketService {
  generateTicket (
    gateId: number,
    vehicleType: VehicleType,
    vehicleNumber: string,
  ): Ticket {
    // Get parking spot from strategy

    return new Ticket();
  }
}