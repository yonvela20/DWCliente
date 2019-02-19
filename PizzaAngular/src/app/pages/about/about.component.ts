import { Component, OnInit, OnDestroy, SkipSelf } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(public script: ScriptService) { }

  ngOnInit() {

    this.script.load('main').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

  }

  ngOnDestroy() {
    this.script.unload(1);
  }

}
