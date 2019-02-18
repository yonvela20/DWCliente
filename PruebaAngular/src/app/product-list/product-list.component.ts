import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Mi lista de productos';
  headers = {desc: 'Producto', price: 'Precio', avail: 'Disponible'};
  
  constructor() { }

  ngOnInit() {
  }

}
