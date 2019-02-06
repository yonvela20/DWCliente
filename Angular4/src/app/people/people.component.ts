import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  title1 = "ngStyle";
  title2 = "ngClass";

  showImage = false;

  filterSearch: string = " ";
  
  people: any[] = [{
    name: "Yon", 
    country: "Espanya", 
    url: "../assets/img/spain.png"
  }, 
  {
    name: "Julian", 
    country: "Rusia", 
    url: "../assets/img/rusia.png"
  }, 
  {
    name: "Erik", 
    country: "Pinedo",
    url: "../assets/img/pinedo.png"
  }, 
  {
    name: "Marisa", 
    country: "Botswana", 
    url: "../assets/img/botswana.png"
  }];



  getColor(country){
    switch(country){
      case "Espanya":
        return "red";
      case "Rusia":
        return "yellow";
      case "Botswana": 
        return "pink";
      case "Pinedo": 
        return "brown";
      default: 
        return "white";
    }
  }

  getClass(name){
    switch(name){
      case "Yon":
      return "bg-success";
    case "Julian":
      return "bg-warning";
    case "Marisa": 
      return "bg-primary";
    case "Erik": 
      return "bg-danger";
    default: 
      return "bg-info";
    }
  }


  toggleImage(){
    this.showImage = !this.showImage;  
  }

  dayNight(){

  }

  constructor() { }

  ngOnInit() {
  }

}
