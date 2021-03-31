import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {


  formModel = {
    UserName: '',
    FullName: '',
    Email: '',
    Password: ''
  }

  constructor(private service:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(drivenForm: NgForm){
        this.service.register(this.formModel)
        drivenForm.resetForm();
  }
}


