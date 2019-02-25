import { ServiceMenuService } from 'src/app/servicios/service.menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(public script: ScriptService, public menuService: ServiceMenuService) { }

  ngOnInit() {
    this.script.load('main').then(data => {
      console.log('script loaded', data);
    }).catch(error => console.log(error));
  }

  lessThan(i: number, j:number){
    return i<j;
  }

  ruta(imagen: String){
    return "assets/images/"+imagen;
  }

  ngOnDestroy() {

  }
}
