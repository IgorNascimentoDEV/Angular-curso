import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  app-title
  <button (click)="adicionar()">Destruir</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public valor:number = 1

  constructor(){}

  public adicionar(): number{
    return this.valor += 1;
  }


  ngOnInit(): void {
  }
}
