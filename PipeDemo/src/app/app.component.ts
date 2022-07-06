import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'PipeDemo';
  public name="Marvellous Infosystems from pune";

  public today=new Date();
}
