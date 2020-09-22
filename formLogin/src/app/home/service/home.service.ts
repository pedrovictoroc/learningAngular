import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.API+'/1')
  }

  getUserById(){
    return this.http.get<User>(this.API)
  }
}
