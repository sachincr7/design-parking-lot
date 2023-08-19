import { GenerateTicketRequestDto } from "../dtos/generate-ticket-request-dto";
import { GenerateTicketResponseDto } from "../dtos/generate-ticket-response-dto";
import { ResponseStatus } from "../dtos/response-status";
import { Ticket } from "../modules/ticket";
import { VehicleType } from "../modules/vehicle-type";
import { TicketService } from "../services/ticket-service";

export class TicketController {
  private ticketService!: TicketService;

  constructor (ticketService: TicketService) {
    this.ticketService = ticketService;
  }

  generateTicket (request: GenerateTicketRequestDto): GenerateTicketResponseDto {
    const vehicleNumber: string = request.getVehicleNumber();
    const vehicleType: VehicleType = request.getVehiclType();
    const gateId: number = request.getGateId();

    let ticket: Ticket = new Ticket();
    const response: GenerateTicketResponseDto = new GenerateTicketResponseDto();

    try {
      ticket = this.ticketService.generateTicket(
        gateId,
        vehicleType,
        vehicleNumber,
      );
    } catch (error) {
      response.setResponseStatus(ResponseStatus.FAILURE);
      response.setMessage('Gate Id is invalid');

      return response;
    }

    response.setTicketId(ticket.getId());
    response.setOperatorName(ticket.getOperator().getName());
    response.setSpotNumber(ticket.getParkingSpot().getSpotNumber());
    response.setResponseStatus(ResponseStatus.SUCCESS);

    return response;
  }
}