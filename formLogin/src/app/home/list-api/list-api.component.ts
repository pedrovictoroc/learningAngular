import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { User } from '../service/user.model';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.sass']
})
export class ListAPIComponent implements OnInit {

  users: User[]

  constructor(private service:HomeService) { }

  ngOnInit() {

    this.service.getUsers().subscribe(

      //Com apenas um resultado retorna objeto, não array
      response => response.length < 2 || response.length === undefined 
      ? 
      this.users = [response]
      :
      this.users = response)

  }

}
