import { ProductosService } from './../../servicios/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public productosService: ProductosService) { }

  ngOnInit() {
  }

}
