import { Component, OnInit } from '@angular/core';

import { state } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent{

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
     
      Country:new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      PINCode: new FormControl('')
    })
    
  });
  setValues() {
  
   alert(this.profileForm.controls['address'].value.Country);
   console.log(this.profileForm.controls['address'].value);
   console.log(this.profileForm.value.firstName);

 
  }

}
