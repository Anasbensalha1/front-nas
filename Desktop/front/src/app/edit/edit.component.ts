import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empDetail !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      nom : [''],
      prenom : [''],
      cnrps : [''],
    });
  }

  Ajoututilisateur() {
    console.log(this.empDetail);
  }


}