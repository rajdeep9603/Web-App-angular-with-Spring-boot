import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  // to get all service we should make contructor
  constructor(private employeeService:EmployeeService,private router : Router ){}

  // when page is refresh it will be called first
  ngOnInit(): void {
  }

  // save form employee obj to mysql
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
      // redirect to get all employee
      this.goToEmployeeList();
    },
      error=>console.log(error));
    
  }


  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  // when user click on submit btn 
  onSubmit(){
    console.log(this.employee);
    // this.saveEmployee();
    this.saveEmployee();
  }



}
