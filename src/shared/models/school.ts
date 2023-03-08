export class School {
  id:  number;
  name: string;
  address: string;
  phone: string;
  isActive: boolean;
  createdDate: Date;
  lastModifiedDate: Date;


  constructor(id: number, name: string, address: string, phone: string, isActive: boolean, createdDate: Date, lastModifiedDate: Date) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.isActive = isActive;
    this.createdDate = createdDate;
    this.lastModifiedDate = lastModifiedDate;
  }
}
