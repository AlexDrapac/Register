import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(drivenForm: NgForm){
    console.log(drivenForm)
    console.log(drivenForm.value.emailField)
  }
}
