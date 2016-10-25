import { Address } from './address';

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  family: Person[];
  emails: string[];
  phones: string[];
  address: Address;
  marital: string;
  ageCat: string;
  reference: string;
  nextSteps: any;
  created_at: Date;
  updated_at: Date;

  constructor(obj?: any) {
    this.id           = obj && obj.id           || null;
    this.firstName    = obj && obj.firstName    || null;
    this.lastName     = obj && obj.lastName     || null;
    this.family       = obj && obj.family       || new Array();
    this.emails       = obj && obj.emails       || new Array('');
    this.phones       = obj && obj.phones       || new Array('');
    this.address      = obj && obj.address      || {};
    this.marital      = obj && obj.marital      || null;
    this.ageCat       = obj && obj.ageCat       || null;
    this.reference    = obj && obj.reference    || null;
    this.nextSteps    = obj && obj.nextSteps    || {};
    this.created_at   = obj && obj.created_at   || new Date();
    this.updated_at   = obj && obj.updated_at   || new Date();
  }
}
