import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { CommonModule } from '@angular/common';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  users: ParentUser[] = [
    {Id: 1, Firstname: 'John', Lastname: 'Doe', DateOfBirth: new Date(1995, 5, 20), Email: 'j.doe@mail.com', PhoneNumber: '1 444 HERES JOHNNY 444'},
    {Id: 2, Firstname: 'Jane', Lastname: 'Dane', DateOfBirth: new Date(2001, 7, 2), Email: 'j.dane@mail.ru', PhoneNumber: '1 234 568 777'},
  ]

  children: ChildUser[] = [
    {Id: 1, Firstname: 'John', Lastname: 'Doe', DateOfBirth: new Date(1995, 5, 20), Email: 'j.doe@mail.com', PhoneNumber: '1 444 HERES JOHNNY 444'},
    {Id: 2, Firstname: 'Jane', Lastname: 'Dane', DateOfBirth: new Date(2001, 7, 2), Email: 'j.dane@mail.ru', PhoneNumber: '1 234 568 777'},
  ]

  @Output()
  childrenOutput = new EventEmitter<ChildUser>()

  constructor(private display: DisplayService)
  {
    this.children.forEach(child => this.childrenOutput.emit(child));
  }

  displayParents()
  {
    this.display.displayUsers(this.users);
  }
}
