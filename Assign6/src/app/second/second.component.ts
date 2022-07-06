import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent 
 {
  public str2 :any;
  public str3 : any="Marvellous Infosystems";
  public upr(data : any)
  {
      this.str2 = data;
  }
  
}
