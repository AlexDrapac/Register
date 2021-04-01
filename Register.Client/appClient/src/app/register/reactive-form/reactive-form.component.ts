import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  

  constructor(private formBuilder: FormBuilder, public service:RegisterService) { }

  ngOnInit(): void {
  }


  onSubmit(reactiveForm){
    this.service.register(reactiveForm.value);
    this.service.reactiveForm.reset()
  }

}
