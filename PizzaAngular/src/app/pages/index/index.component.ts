import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptService } from './../../servicios/service.scripts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy{

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
