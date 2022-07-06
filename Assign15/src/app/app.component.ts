import { Component, EventEmitter, Output } from '@angular/core';
import { EmailValidator, FormBuilder,Validators,MinLengthValidator, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  @Output() MarvellousFormValue = new EventEmitter<String>();
  constructor(public fobj:FormBuilder,private router:Router)
  {
  }

  MarvellousForm=this.fobj.group(
    {
      Firstname : ['', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z ]*$')]],
      Lastname : ['', [Validators.required,Validators.maxLength(10)]],
       Email : ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
       Phone : ['', [Validators.required,Validators.maxLength(10),Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
     // Address : ['', [Validators.required,Validators.minLength(4), Validators.pattern('^[a-zA-Z ]*$')]],
     // State : ['']
      
    }
  );
    SubmitForm(MarvellousForm:NgForm)
    {
      MarvellousForm.value.emit(MarvellousForm.value);
    }
  send()
  {
    this.router.navigate(['/details']);
  }
}

