import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public str:any;
  public fun() 
  {
    
     this.str="MARVELLOUS INFOSYSTEMS";
  }
  public fun2()
  {
    this.str="marvellous infosystems";
  }
}
