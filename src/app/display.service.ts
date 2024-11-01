import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  constructor() { }
  displayUsers(users: {
    Id: number;
    Firstname: string;
    Lastname: string;
    DateOfBirth: Date;
    PhoneNumber: string;
    Email: string;
}[]) {
    console.log('Array is displayed by Display service');
    users.forEach(user => console.info(user))
  }
}
