import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(public script: ScriptService) { }

  ngOnInit() {
    this.script.load('main').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

  ngOnDestroy(){
    this.script.unload(1);
  }
}
