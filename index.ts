import { TicketController } from "./src/controllers/ticket-controller";
import { GenerateTicketRequestDto } from "./src/dtos/generate-ticket-request-dto";
import { GenerateTicketResponseDto } from "./src/dtos/generate-ticket-response-dto";
import { Gate } from "./src/modules/gate";
import { GateStatus } from "./src/modules/gate-status";
import { GateType } from "./src/modules/gate-type";
import { Operator } from "./src/modules/operator";
import { ParkingFloor } from "./src/modules/parking-floor";
import { ParkingLot } from "./src/modules/parking-lot";
import { ParkingSpot } from "./src/modules/parking-spot";
import { SpotStatus } from "./src/modules/spot-status";
import { Vehicle } from "./src/modules/vehicle";
import { VehicleType } from "./src/modules/vehicle-type";
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

console.log('Application has started');

// create an operator
const operator: Operator = new Operator();
operator.setEmployeeId(1);
operator.setName('John');

// Create an Entry gate
const gate: Gate = new Gate();
gate.setGateNumber(1);
gate.setCurrentOperator(operator);
gate.setGateStatus(GateStatus.OPEN);
gate.setGateType(GateType.ENTRY);
gateRepository.save(gate);

const vehicle: Vehicle = new Vehicle();
vehicle.setVehicleNumber('MH04-1826');
vehicle.setVehicleType(VehicleType.CAR);

const spot1 = new ParkingSpot();
spot1.setId(1);
spot1.setSpotStatus(SpotStatus.PARKED);
spot1.setSpotNumber(1);
spot1.setSupportedVehicles([VehicleType.CAR, VehicleType.SUV, VehicleType.OTHERS]);

const spot2 = new ParkingSpot();
spot2.setId(2);
spot2.setSpotStatus(SpotStatus.AVAILABLE);
spot2.setSpotNumber(2);
spot2.setSupportedVehicles([VehicleType.CAR, VehicleType.SUV]);

const parkingFloor = new ParkingFloor();
parkingFloor.setFloorNo(1);
parkingFloor.setParkingSpots([spot1, spot2]);
parkingFloor.setCreatedAt(new Date());
parkingFloor.setLastUpdatedAt(new Date());

const parkingLot: ParkingLot = new ParkingLot();
parkingLot.setGates([gate]);
parkingLot.setCapacity(100);
parkingLot.setParkingFloors([parkingFloor]);
parkingLotRepository.save(parkingLot);

const request = new GenerateTicketRequestDto();
request.setGateId(gate.getId());
request.setVehiclType(vehicle.getVehicleType());
request.setVehicleNumber(vehicle.getVehicleNumber());

const ticket: GenerateTicketResponseDto = ticketController.generateTicket(request);

console.log('ticket created', ticket);



