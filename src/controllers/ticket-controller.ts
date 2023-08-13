import { GenerateTicketRequestDto } from "../dtos/generate-ticket-request-dto";
import { GenerateTicketResponseDto } from "../dtos/generate-ticket-response-dto";
import { ResponseStatus } from "../dtos/response-status";
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

    const ticket = this.ticketService.generateTicket(
      gateId,
      vehicleType,
      vehicleNumber,
    )

    const response: GenerateTicketResponseDto = new GenerateTicketResponseDto();
    response.setTicketId(ticket.getId());
    response.setOperatorName(ticket.getOperator().getName());
    response.setSpotNumber(ticket.getParkingSpot().getSpotNumber());
    response.setResponseStatus(ResponseStatus.SUCCESS);

    return response;
  }
}