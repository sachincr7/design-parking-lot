import { BaseModel } from "./base-model";

export class Operator extends BaseModel {
  private name!: string;
  private employeeId!: number;

  getName () {
    return this.name;
  }
  
  setName (name: string) {
    this.name = name;
  }

  getEmployeeId () {
    return this.employeeId;
  }

  setEmployeeId (employeeId: number) {
    this.employeeId = employeeId; 
  }
}