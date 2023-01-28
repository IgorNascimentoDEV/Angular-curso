import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public listComida: Array<{comida: string, preco:number}>= [
    {comida: "X-coxinha", preco:10},
    {comida: "X-bacon", preco:100},
    {comida: "X-salada", preco:105}
  ]

  public submitForm(form: NgForm){
    console.log(form.value);
  }
}
