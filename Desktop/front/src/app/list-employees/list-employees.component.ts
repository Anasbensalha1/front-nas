import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from 'src/app/model/employee/employee.module';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee [] = [];
  

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.empDetail = this.formBuilder.group({
      nom : [''],
      prenom : [''],
      cnrps : [''],
      nomar : [''],
      prenomar :[''],
      numtel: [''],
      adresse : [''],
      poste : [''],
      structure : [''],
    })
  };

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.nom= this.empDetail.value.nom;
    this.empObj.prenom= this.empDetail.value.prenom;
    this.empObj.nomar= this.empDetail.value.nomar;
    this.empObj.prenomar= this.empDetail.value.prenomar;
    this.empObj.cnrps= this.empDetail.value.cnrps;
    this.empObj.adresse= this.empDetail.value.adresse;
    this.empObj.poste= this.empDetail.value.poste;
    this.empObj.structure= this.empDetail.value.structure;
    this.empObj.numtel= this.empDetail.value.numtel;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    }, err => {
      console.log(err);
    });
  }


  getAllEmployee () {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList=res ;
    }, err => {
      console.log(err);
    });
  }

  editEmployee(emp : Employee) {
    this.empDetail.controls['nom'].setValue(emp.nom);
    this.empDetail.controls['nomar'].setValue(emp.nomar); 
    this.empDetail.controls['prenom'].setValue(emp.prenomar); 
    this.empDetail.controls['adresse'].setValue(emp.adresse); 
    this.empDetail.controls['cnrps'].setValue(emp.cnrps);   
    this.empDetail.controls['numtel'].setValue(emp.numtel); 
    this.empDetail.controls['poste'].setValue(emp.poste);
    this.empDetail.controls['structure'].setValue(emp.structure); }

  }
