import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  
  public pageTitle: string = "Welcome";
  qualifications = ["MCA", "MBA", "MHRM"];
  experiences = ["1 year", "2 years", "More than 2 years"];
  languages = ["English", "Hindi", "Gujarati"];
  model = new Employee("", "", "", "", "", "");

    

  submitForm() {
   
    console.log(this.model);
    return;
  }
}
