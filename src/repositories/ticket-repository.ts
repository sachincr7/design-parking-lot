import { Ticket } from "../modules/ticket";

export class TicketRepository {
  save (ticket: Ticket): Ticket {
    return ticket;
  }
}