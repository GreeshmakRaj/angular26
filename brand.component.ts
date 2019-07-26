import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({

  selector : "brand",
  templateUrl: "./brand.component.html" ,
  styleUrls : ["./brand.component.css" ]

  
})
export class BrandComponent{
 @Input() brands : any;
 @Output() a : EventEmitter<String> = new EventEmitter<String> (); 
 remove(){
      this.a.emit(this.brands.name);
 }

}