import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';
import { ServiceMenuService } from 'src/app/servicios/service.menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(public script: ScriptService, public menuService: ServiceMenuService) { }

  ngOnInit() {
    this.script.load('main').then(data => {
      console.log('script loaded', data);
    }).catch(error => console.log(error));
  }

  ngOnDestroy() {

  }

}
