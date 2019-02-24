import { Injectable } from '@angular/core';
import { IEquipo } from '../interfaces/i-equipo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePlantillaService {
  cargada = false;
  plantilla : IEquipo = {};

  constructor(private http: HttpClient) { 
    this.cargaPlantilla();
   }

  cargaPlantilla(){
    this.http.get('https://pizzeria-e4851.firebaseio.com/plantilla.json')
    .subscribe((respuesta:IEquipo)=>{
       this.cargada = true; 
       this.plantilla = respuesta; 
       console.log(this.plantilla);
    });

  }
}
