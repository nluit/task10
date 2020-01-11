 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  public newdate :string ;
  constructor(private _http: HttpClient) { }
  
  getUser(id) {
    // return   fetch('https://jsonplaceholder.typicode.com/users/'+id)
    // .then(response => response.json())
    // .then(json => { let arr = [] ; arr = json ; return arr;});
    return this._http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }

  getData () : Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getfetch () {
   return  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => { let arr = [] ;  json.map(data => { arr.push(data) }   ) ; return arr;});
  }
  
}
