import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  loaded: boolean;
  Profile=[];

  constructor() {
   this.loaded=true;
   alert(document.getElementById('transfer').textContent);
   //this.Profile=Persons; 
  }

  ngOnInit() {
  }

}
