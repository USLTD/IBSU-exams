import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user/user.component";
import { ParentUser } from './parent-user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildUser } from './child-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent, FormsModule, ReactiveFormsModule],
  providers: [Title],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Luka Mamukashvili';
  users: {
    firstname: string,
    lastname: string,
    age: number
  }[] = [
    { firstname: 'John', lastname: 'Doe', age: 20 },
    { firstname: 'Jane', lastname: 'Doe', age: 18 },
    { firstname: 'Luka', lastname: 'Mamukashvili', age: 19 },
    { firstname: 'John', lastname: 'Biden', age: 81 },
    { firstname: 'Donald', lastname: 'Trump', age: 78 }
  ]

  parentUsers: ParentUser[] = [
    {Id: 1, Firstname: 'John', Lastname: 'Doe', DateOfBirth: new Date(1995, 5, 20), Email: 'j.doe@mail.com', PhoneNumber: '1 444 HERES JOHNNY 444'},
    {Id: 2, Firstname: 'Jane', Lastname: 'Dane', DateOfBirth: new Date(2001, 7, 2), Email: 'j.dane@mail.ru', PhoneNumber: '1 234 568 777'},
  ];

  children: ChildUser[] = []

  addChildren(newChild: ChildUser) {
    this.children.push(newChild);
  }

  userForm = new FormGroup({
    id: new FormControl('', Validators.required),
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateofbirth: new FormControl('', Validators.required),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    email: new FormControl('', [Validators.email, Validators.minLength(8)])
  })

  constructor(private title: Title) {
    this.title.setTitle(`| ${this.name} |`);
  }

  onSubmit()
  {
  }
}
