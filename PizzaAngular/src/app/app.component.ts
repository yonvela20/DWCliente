import { Component } from '@angular/core';
import { ServiceMenuService } from './servicios/service.menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaAngular';
  constructor(public menuService : ServiceMenuService){

    }
}
