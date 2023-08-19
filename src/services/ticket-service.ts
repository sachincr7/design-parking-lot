import { InvalidGateException } from "../exceptions/invalid-gate-exception";
import { Gate } from "../modules/gate";
import { Operator } from "../modules/operator";
import { ParkingSpot } from "../modules/parking-spot";
import { Ticket } from "../modules/ticket";
import { Vehicle } from "../modules/vehicle";
import { VehicleType } from "../modules/vehicle-type";
import { GateRepository } from "../repositories/gate-repository";
import { VehicleRepository } from "../repositories/vehicle-repository";
import { SpotAssignmentStrategy } from "../strategies/spot-assignment-strategy/spot-assignment-strategy";

export class TicketService {
  private gateRepository: GateRepository;
  private vehicleRepository: VehicleRepository;
  private spotAssignmentStrategy: SpotAssignmentStrategy;

  constructor (
    gateRepository: GateRepository,
    vehicleRepository: VehicleRepository,
    spotAssignmentStrategy: SpotAssignmentStrategy,
  ) {
    this.gateRepository = gateRepository;
    this.vehicleRepository = vehicleRepository;
    this.spotAssignmentStrategy = spotAssignmentStrategy;
  }

  generateTicket (
    gateId: number,
    vehicleType: VehicleType,
    vehicleNumber: string,
  ): Ticket {
    // Get parking spot from strategy

    const gate: Gate | null = this.gateRepository.findGateById(gateId);

    if (!gate) {
      throw new InvalidGateException();
    }

    const operator: Operator = gate.getCurrentOperator();

    let vehicle: Vehicle | null = this.vehicleRepository.findVehicleById(vehicleNumber);

    if (!vehicle) {
      vehicle = new Vehicle();
      vehicle.setVehicleNumber(vehicleNumber);
      vehicle.setVehicleType(vehicleType);
      this.vehicleRepository.save(vehicle);
    };

    const parkingSpot: ParkingSpot = this.spotAssignmentStrategy.findSpot();

    const ticket: Ticket = new Ticket();
    ticket.setParkingSpot(parkingSpot);
    ticket.setEntryTime(new Date());
    ticket.setGate(gate);
    ticket.setVehicle(vehicle);
    ticket.setOperator(operator);

    return ticket;
  }
}