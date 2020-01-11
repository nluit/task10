import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public number =1;
  public  show: boolean = true;

  btn(data) {
    console.log(data);
    this.number = data;
  }
  ngOnInit() {
    
  }

}
