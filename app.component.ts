import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nameInApp = 'Angular'; //name is passed to hellocomponent(interpolation)
  objects = [
    {name : "tricon",
    link : "https://www.triconinfotech.com/",
    logo : "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
    id : 1
  },
  {
    name : "youtube",
    link : "https://www.youtube.com/",
    logo : "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
    id : 2
    
  },
  {
name : "isro",
    link : "https://www.isro.gov.in/",
    logo : "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
    id : 3
  }]
  
  removeItem(event){
   for(let i of this.objects){
     if(event == i.name)
     {
      
       i.name=" ";
       i.link=" ";
     }

   }
    
  }
  

  
}

