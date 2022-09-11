import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-curso';
  nome = '';
  vetor = ['tv', 'cadeira', 'sofá', 'mesa', 'celular']
  
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome = "";
  }

  remover(x: number){
    this.vetor.splice(x,1)
  }
}
