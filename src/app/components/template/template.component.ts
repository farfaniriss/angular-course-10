import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  user:USER = {
    name: null,
    lastName: null,
    email: null,
    country: "",
    sex: "Hombre",
    accept: false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  },
  {
    codigo: "COL",
    nombre: "Colombia"
  }]
  constructor() { }

  ngOnInit() {
  }

  save(forma:NgForm){
      console.log(forma.value);
  }

}

export interface USER {
  name:string,
  lastName:string,
  email:string,
  country:string,
  sex:string,
  accept:boolean
}