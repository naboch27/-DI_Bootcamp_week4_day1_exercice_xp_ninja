import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  names: any

  prix: any

  listProd = [
    {
      name: "banane",
      prix: 600
    },
    {
      name: "pomme",
      prix: 1000
    },
    {
      name: "orange",
      prix: 2000
    },
    {
      name: "mangue",
      prix: 5000
    }
  ]

  addProduct() {
this.listProd.push({
    name: "ba",
      prix: 600
})
   
  }

  constructor() {

  }

}
