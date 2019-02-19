import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(public script: ScriptService) { }

  ngOnInit() {
    this.script.load('main').then(data => {
      console.log('script loaded', data);
    }).catch(error => console.log(error));
  }

  ngOnDestroy() {

  }

}
