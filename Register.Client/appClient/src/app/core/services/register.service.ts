import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  readonly BaseURI = 'https://localhost:44375/api'

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
