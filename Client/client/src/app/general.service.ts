import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import Child from 'src/models/child';
import User from 'src/models/user';
import details from 'src/models/user';



@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  routeUrl = 'https://localhost:7119/api/user';
  personalFormBasic = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    id :['', Validators.required],
    dateBorn: [new Date(), Validators.required],
    gender:['', Validators.required],
    HMO: ['', Validators.required],
    children : this.fb.array([]),
 })

  addUser(user: User) {
    return this.http.post<User>(`https://localhost:7119/api/user/AddUser`, user) 
  }
  addChild(child: Child) {
    return this.http.post<Child>(`https://localhost:7119/api/Child/AddChild`, child) 
  }
  constructor(public http: HttpClient, public fb: FormBuilder) { }
}
