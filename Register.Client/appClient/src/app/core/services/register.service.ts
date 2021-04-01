import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private formBuilder:FormBuilder) { }

  readonly BaseURI = 'https://localhost:44375/api'

  reactiveForm = this.formBuilder.group({
    userName: new FormControl(),
    fullName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  register(formData){
     this.http.post(this.BaseURI + '/Authentification/Register', formData, { responseType: 'text' }).subscribe(
      (res: any) => {
        console.log("Success")
      },
      err => {
        console.log(err)
      }
    );
  }
}
