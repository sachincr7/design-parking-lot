import { Ticket } from "../modules/ticket";

export class TicketRepository {
  private tickets: Map<number, Ticket> = new Map();
  private lastSavedId = 1;

  save (ticket: Ticket): Ticket {
    ticket.setId(this.lastSavedId + 1);
    this.lastSavedId += 1;
    this.tickets.set(this.lastSavedId, ticket);
    return ticket;
  }
}