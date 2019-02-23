import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductos } from '../interfaces/i-productos';

@Injectable({
  providedIn: 'root'
})
export class ServiceMenuService {
  cargada = false;
  productos : IProductos = {};
  constructor(private http: HttpClient) {

    this.cargaMenu();
   }

   cargaMenu(){
    this.http.get('https://pizzeria-e4851.firebaseio.com/menu.json')
    .subscribe((respuesta:IProductos)=>{
       this.cargada = true; 
       this.productos = respuesta; 
       console.log(this.productos);
    });
   }
}
