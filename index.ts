import { TicketController } from "./src/controllers/ticket-controller";
import { GateRepository } from "./src/repositories/gate-repository";
import { ParkingLotRepository } from "./src/repositories/parking-lot-repository";
import { TicketRepository } from "./src/repositories/ticket-repository";
import { VehicleRepository } from "./src/repositories/vehicle-repository";
import { TicketService } from "./src/services/ticket-service";
import { RandomSpotAssignmentStrategy } from "./src/strategies/spot-assignment-strategy/random-spot-assignment-strategy";
import { SpotAssignmentStrategy } from "./src/strategies/spot-assignment-strategy/spot-assignment-strategy";

const gateRepository: GateRepository = new GateRepository();
const parkingLotRepository: ParkingLotRepository = new ParkingLotRepository();
const ticketRepository: TicketRepository = new TicketRepository();
const vehicleRepository: VehicleRepository = new VehicleRepository();
const spotAssignmentStrategy: SpotAssignmentStrategy = new RandomSpotAssignmentStrategy();

const ticketService: TicketService = new TicketService(
  gateRepository,
  vehicleRepository,
  spotAssignmentStrategy,
  ticketRepository,
  parkingLotRepository,
)

let ticketController: TicketController;


ticketController = new TicketController(ticketService);


console.log('Application has started', ticketController);

