import { InvalidGateException } from "../exceptions/invalid-gate-exception";
import { Gate } from "../modules/gate";
import { Operator } from "../modules/operator";
import { ParkingLot } from "../modules/parking-lot";
import { ParkingSpot } from "../modules/parking-spot";
import { Ticket } from "../modules/ticket";
import { Vehicle } from "../modules/vehicle";
import { VehicleType } from "../modules/vehicle-type";
import { IGateRepository } from "../repositories/IGate-repository";
import { ParkingLotRepository } from "../repositories/parking-lot-repository";
import { TicketRepository } from "../repositories/ticket-repository";
import { VehicleRepository } from "../repositories/vehicle-repository";
import { SpotAssignmentStrategy } from "../strategies/spot-assignment-strategy/spot-assignment-strategy";

export class TicketService {
  private gateRepository: IGateRepository;
  private vehicleRepository: VehicleRepository;
  private spotAssignmentStrategy: SpotAssignmentStrategy;
  private ticketRepository: TicketRepository;
  private parkingLotRepository: ParkingLotRepository;

  constructor (
    gateRepository: IGateRepository,
    vehicleRepository: VehicleRepository,
    spotAssignmentStrategy: SpotAssignmentStrategy,
    ticketRepository: TicketRepository,
    parkingLotRepository: ParkingLotRepository,
  ) {
    this.gateRepository = gateRepository;
    this.vehicleRepository = vehicleRepository;
    this.spotAssignmentStrategy = spotAssignmentStrategy;
    this.ticketRepository = ticketRepository;
    this.parkingLotRepository = parkingLotRepository;
  }

  generateTicket (
    gateId: number,
    vehicleType: VehicleType,
    vehicleNumber: string,
  ): Ticket {
    const gate: Gate | null = this.gateRepository.findGateById(gateId);

    if (!gate) {
      // throw new InvalidGateException();
      throw new Error('Gate not available');
    }

    const operator: Operator = gate.getCurrentOperator();

    let vehicle: Vehicle | null = this.vehicleRepository.findVehicleById(vehicleNumber);

    if (!vehicle) {
      vehicle = new Vehicle();
      vehicle.setVehicleNumber(vehicleNumber);
      vehicle.setVehicleType(vehicleType);
      this.vehicleRepository.save(vehicle);
    };

    const parkingLot: ParkingLot | null = this.parkingLotRepository.getParkingLotOfGate(gate);

    if (!parkingLot) {
      throw new Error('Parking Lot not available');
    }

    // Get Parking spot from strategy
    const parkingSpot: ParkingSpot | null = this.spotAssignmentStrategy.findSpot(vehicleType, parkingLot, gate);

    if (!parkingSpot) {
      throw new Error('Parking spot not available');
    }

    const ticket: Ticket = new Ticket();
    ticket.setParkingSpot(parkingSpot);
    ticket.setEntryTime(new Date());
    ticket.setGate(gate);
    ticket.setVehicle(vehicle);
    ticket.setOperator(operator);

    return this.ticketRepository.save(ticket);
  }
}