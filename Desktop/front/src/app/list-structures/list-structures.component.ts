import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-structures',
  templateUrl: './list-structures.component.html',
  styleUrls: ['./list-structures.component.css']
})
export class ListStructuresComponent implements OnInit {
  role: string = "";

  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role") ?? ""

  }

}
