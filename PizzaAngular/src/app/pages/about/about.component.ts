import { Component, OnInit, OnDestroy, SkipSelf } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';
import { ServicePlantillaService } from 'src/app/servicios/service.plantilla.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(public script: ScriptService, public plantillaService: ServicePlantillaService) { }

  ngOnInit() {

    this.script.load('main').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

  }

  ngOnDestroy() {
    this.script.unload(1);
  }

}
