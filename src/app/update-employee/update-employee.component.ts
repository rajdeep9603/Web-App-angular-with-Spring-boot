import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{


  // ActivatedRoute : it is used fot to fetch id from the url like localhost:8080/1 ::->>so you can get id 1 here:
  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit():void{
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee=data;
      })
    }

    onSubmit(){
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
        this.goToEmployeeList();
      })
    }
    
    goToEmployeeList(){  
      this.router.navigate(['/employees']);
    }
  
}
