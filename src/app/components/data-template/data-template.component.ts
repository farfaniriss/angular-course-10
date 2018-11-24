import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";


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
    email : 'fc@holi.com',
    hobbies: ["Eat","Sleep","Run"]
  } 

  constructor() { 
    this.forma = new FormGroup({
      'fullName': new FormGroup({
        'name' : new FormControl('', [Validators.required, Validators.minLength(3)]),
        'lastName' : new FormControl('', [Validators.required, this.noHerrera])
      }),
      // 'name' : new FormControl('', [Validators.required, Validators.minLength(3)]),
      // 'lastName' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'hobbies': new FormArray([
        new FormControl('Eat', Validators.required)
      ]),
      'pass1': new FormControl('', Validators.required),
      'pass2': new FormControl(),
      'username': new FormControl('', this.existsUser)
    });

    this.forma.controls['pass2'].setValidators([
      Validators.required,
      this.notEqual.bind(this.forma) //for this
    ])

    this.forma.valueChanges.subscribe( data => {
      console.log(data);
    })

    this.forma.controls['username'].valueChanges.subscribe( data => {
      console.log(data);
    })

    this.forma.controls['username'].statusChanges.subscribe( data => {
      console.log(data);
    })

    //this.forma.setValue( this.user );
  }

  ngOnInit() {

  }

  save(){
    console.log(this.forma.value)

    

    // this.forma.reset({
    //   fullName: {
    //     name: "",
    //     lastName: ""
    //   },
    //   email:""
    // })
  }

  addHobby(){
    (<FormArray>this.forma.controls['hobbies']).push(
      new FormControl('Sleep', Validators.required)
    )
  }

  //validaciones personalizadas

  noHerrera(control:FormControl) : {[s:string]:boolean}{
    if (control.value === "herrera"){
      return {
        noherrera:true
      }
    }
    return null;
  }

  notEqual (control: FormControl) : {[s:string]:boolean}{

    let forma:any = this;
    if (control.value !== forma.controls['pass1'].value){
      return {
        notequal:true
      }
    }
    return null;
  }

  existsUser(control: FormControl): Promise<any> | Observable<any>{
    let promise = new Promise(
      ( resolve, reject ) => {
          setTimeout(() => {
            if (control.value === "strider") {
              resolve ({existe:true})
            } else {
              resolve (null)
            }
          }, 3000);
      })
    
    return promise;
  }
}
