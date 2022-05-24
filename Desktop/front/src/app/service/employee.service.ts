import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee/employee.module';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    
    private URL = environment.baseURL+"emp/";
 

  constructor(private http : HttpClient) {
   
  }

   getAllEmployee (): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.URL);}

    addEmployee (employee : Employee): Observable<Employee[]>{
      return this.http.post<Employee[]>(this.URL,employee);}

    updateEmployee (emp: Employee): Observable<Employee[]>{
      return this.http.put<Employee[]>(this.URL,emp);} 
    
    public deleteEmployee (employee : Employee): Observable<void>{
      return this.http.delete<void>(this.URL+"/employee/delete/"+employee.id);}
    }