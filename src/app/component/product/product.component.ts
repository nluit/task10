import { Component, OnInit } from '@angular/core';
import { Product } from '../product/products';
import { list_product } from '../product/list-products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  public products = list_product;
  ngOnInit() {
    console.log(this.products);
  }

}
