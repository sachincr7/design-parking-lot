import { ResponseStatus } from "./response-status";

export class GenerateTicketRequestDto {
  ticketId!: number;
  operatorName!: string;
  spotNumber!: number;

  responseStatus!: ResponseStatus;
  message!: string;

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
}