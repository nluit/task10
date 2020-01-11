import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list_product } from '../list-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(  public activatedRoute : ActivatedRoute ) { 

   }
  public products = list_product;
  public result =null ;

  
  ngOnInit() {
   this.activatedRoute.params.subscribe(id => {
    for(var i=0 ; i< this.products.length; i++){
      if (this.products[i].product_id == id.id) {
        this.result = this.products[i];
        break
      }
    }
    console.log(id);
    
   });
   
  }

}
