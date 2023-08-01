export class BaseModel {
  private id!: number;
  private createdAt!: Date;
  private lastUpdatedAt!: Date;

  getId (): number {
    return this.id;
  }

  setId (id: number) {
    this.id = id;
  }

  getCreatedAt (): Date {
    return this.createdAt;
  }

  setCreatedAt (createdAt: Date) {
    this.createdAt = createdAt;
  }

  getLastUpdatedAt (): Date {
    return this.lastUpdatedAt; 
  }

  setLastUpdatedAt (lastUpdatedAt: Date) {
    this.lastUpdatedAt = lastUpdatedAt;
  }
}