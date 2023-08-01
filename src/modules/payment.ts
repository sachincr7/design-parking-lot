import { BaseModel } from "./base-model";
import { Bill } from "./bill";
import { PaymentMode } from "./payment-mode";
import { PaymentStatus } from "./payment-status";

export class Payment extends BaseModel {
  private refernceId!: string;
  private amount!: number;
  private paymentStatus!: PaymentStatus;
  private paymentMode!: PaymentMode;
  private bill!: Bill;
  private time!: Date;

  getAmount (): number {
    return this.amount;
  }

  setAmount (amount: number) {
    this.amount = amount;
  }

  getRefernceId (): string {
    return this.refernceId;
  }

  setRefernceId (refernceId: string) {
    this.refernceId = refernceId;
  }
  
  getPaymentStatus (): PaymentStatus {
    return this.paymentStatus;
  }

  setPaymentStatus (paymentStatus: PaymentStatus) {
    this.paymentStatus = paymentStatus;
  }
  
  getPaymentMode (): PaymentMode {
    return this.paymentMode;
  }

  setPaymentMode (paymentMode: PaymentMode) {
    this.paymentMode = paymentMode;
  }
  
  getBill (): Bill {
    return this.bill;
  }

  setBill (bill: Bill) {
    this.bill = bill;
  }
  
  getTime (): Date {
    return this.time;
  }

  setTime (time: Date) {
    this.time = time;
  }
}