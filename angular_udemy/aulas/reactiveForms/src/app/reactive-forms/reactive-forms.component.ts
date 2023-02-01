import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  constructor(private formBuilder: FormBuilder) { }
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    email: ['', Validators.required, Validators.email]
  })

  public submitForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value.firstName)
      console.log(this.cadastroForm.value.lastName)
    }

  }
}
