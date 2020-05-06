import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [UserService]

})
export class MenuComponent implements OnInit {
  user$: Observable<User[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getusers();
  }



}
