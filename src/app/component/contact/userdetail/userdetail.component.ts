import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  constructor( public activatedRoute : ActivatedRoute , private dataService: DataService  ) { }
  public result = null ;
  ngOnInit() {
    let ids = this.activatedRoute.params.subscribe(id => { 
      this.dataService.getUser(id.id).pipe().subscribe(val => this.result = val)
    })
  }

}
