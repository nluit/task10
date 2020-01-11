import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { map, take, filter, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor (private dataService: DataService ){};

  public  users: any [] =[];
  
  btn(data) {
    this.dataService.getUser(data).pipe().subscribe(val =>  console.log(val));
  }
  ngOnInit() {
    
    this.dataService.getfetch().then(data => { console.log(data); this.users = data });

  }

}
