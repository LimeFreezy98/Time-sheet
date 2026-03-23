import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material-module';
import { Employee } from '../../interfaces/employee';


@Component({
  selector: 'app-analytics-table',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './analytics-table.html',
  styleUrls: ['./analytics-table.scss']
})
export class AnalyticsTable implements OnInit {


  @Input() departmentId: string | undefined;

  @Input() employeeData: Employee[] = []; 

 employees: Employee[] = [];

    weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
  
    ngOnInit(): void {
      
      this.employees = this.employeeData.filter(employee => employee.departmentId === this.departmentId);

    }


getTotalHours(employee: Employee): number {
  return employee.monday + employee.tuesday + employee.wednesday
      + employee.thursday + employee.friday + employee.saturday + employee.sunday;
}

   
}