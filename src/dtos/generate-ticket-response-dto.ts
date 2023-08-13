import { ResponseStatus } from "./response-status";

export class GenerateTicketResponseDto {
  private ticketId!: number;
  private operatorName!: string;
  private spotNumber!: number;

  private responseStatus!: ResponseStatus;
  private message!: string;

  getTicketId (): number {
    return this.ticketId;
  }

  setTicketId (ticketId: number) {
    this.ticketId = ticketId;
  }
  
  getOperatorName (): string {
    return this.operatorName;
  }

  setOperatorName (operatorName: string) {
    this.operatorName = operatorName;
  }
  
  getResponseStatus (): ResponseStatus {
    return this.responseStatus;
  }

  setResponseStatus (responseStatus: ResponseStatus) {
    this.responseStatus = responseStatus;
  }
  
  getMessage (): string {
    return this.message;
  }

  setMessage (message: string) {
    this.message = message;
  }
  
  getSpotNumber (): number {
    return this.spotNumber;
  }

  setSpotNumber (spotNumber: number) {
    this.spotNumber = spotNumber;
  }
}