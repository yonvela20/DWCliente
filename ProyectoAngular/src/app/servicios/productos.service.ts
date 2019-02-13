import { IProductosIdx } from './../interfaces/i-productos-idx';
import { IProductos } from './../interfaces/i-productos';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos_idx: IProductosIdx = {};
  productos: IProductos = {};
  cargada = false;
  constructor(private http: HttpClient) { 
   
    this.cargaInfoProductos();
  }

  
  private cargaInfoProductosIdx(){
    this.http.get('https://portfolio-dc302.firebaseio.com/productos_idx.json').subscribe((resp: IProductosIdx) => {
      this.cargada = true;
      this.productos = resp;
    });
  }


  private cargaInfoProductos() {
    this.http.get('https://portfolio-dc302.firebaseio.com/productos.json').subscribe((resp2: IProductos) => {
      this.cargada = true;
      this.productos = resp2;
    });
  }
}
