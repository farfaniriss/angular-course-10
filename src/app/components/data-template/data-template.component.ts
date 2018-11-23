import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { USER } from '../template/template.component';

@Component({
  selector: 'app-data-template',
  templateUrl: './data-template.component.html',
  styleUrls: ['./data-template.component.css']
})
export class DataTemplateComponent implements OnInit {

  forma:FormGroup;

  user:Object = {
    fullName : {
      name : 'Fernando',
      lastName : 'Campero'
    },
    email : 'fc@holi.com'
  } 

  constructor() { 
    this.forma = new FormGroup({
      // 'fullName': new FormGroup({
      //   'name' : new FormControl('', [Validators.required, Validators.minLength(3)]),
      //   'lastName' : new FormControl('', Validators.required)
      // }),
      'name' : new FormControl('', [Validators.required, Validators.minLength(3)]),
      'lastName' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
  }

  ngOnInit() {

  }

  save(){
    console.log(this.forma.value)
  }

}
