import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent 
{

 public str = "Marvellous Infosystems";
 public fun()
 {
  return this.str;
 }

}
