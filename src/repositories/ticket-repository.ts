import { Ticket } from "../modules/ticket";

export class TicketRepository {
  private tickets: Map<number, Ticket> = new Map();
  private lastSavedId = 1;

  save (ticket: Ticket): Ticket {
    ticket.setId(this.lastSavedId);
    this.tickets.set(this.lastSavedId, ticket);
    this.lastSavedId += 1;
    return ticket;
  }
}