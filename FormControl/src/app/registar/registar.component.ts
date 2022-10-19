import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup({
    Username:new FormControl(''),
    Email:new FormControl(''),
    Password:new FormControl(''),
    ConfirmPassword:new FormControl(''),
  })
  
  Register(){
    console.log(this.registerForm.value);
    
  }

  ngOnInit(): void {
  }

}
