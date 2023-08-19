## Parking Lot Management System
This TypeScript project is an implementation of a Parking Lot Management System, which efficiently manages parking spaces, vehicles, and ticketing operations for a multi-level parking facility.

### Features
* Gate Management: The system supports a parking lot with 'n' gates, each managed by an operator responsible for issuing tickets and controlling access.
* Multi-Floor Structure: The parking lot consists of 'n' floors, allowing for efficient parking space allocation across multiple levels.
* Parking Spot Assignment Strategy: The system employs a parking spot assignment strategy to find an available spot for incoming vehicles based on their type.
* Parking Spot Types: Each parking spot is designed to accommodate specific vehicle types (e.g., car, bike, SUV, others ), ensuring optimized parking allocation.
* Ticket Generation: When a vehicle enters the parking lot through a gate, a ticket is generated. Each ticket includes a unique ticket ID, vehicle details, assigned parking spot, operator information, and entry time.
* Web-Based Interface: The project can be extended to include a web-based interface for users to view parking lot availability, generate tickets, and manage parking operations.

### Project Structure
The TypeScript codebase follows a well-structured architectural design, separating concerns for better modularity and maintainability. The system uses classes and interfaces to represent various entities like Gates, Floors, Parking Spots, Vehicles, Operators, and Tickets.

### How to Use
1. Clone the repository.
2. Install Node.js and npm if not already installed.
3. Navigate to the project directory and run npm install to install project dependencies.
4. Write your TypeScript code in the appropriate files, focusing on entities like Gates, Floors, and Parking Spots.
5. Configure your parking spot assignment strategy to allocate parking spots based on vehicle type.
5. Use the TypeScript compiler (ts-node) to transpile your code to JavaScript.
6. Run the JavaScript files using Node.js to simulate parking lot operations.

### Contributions
Contributions to the project are welcome! If you have ideas for improvements, enhancements, or additional features, feel free to submit pull requests.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).
