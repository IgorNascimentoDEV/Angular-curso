import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-atributos>
  <h1>Aulas deretiva atributo</h1>
  <hr>
  </app-diretivas-atributos>

  <app-new-component></app-new-component>

  <app-input  [contador]="addValue"></app-input>
  <button (click)="add()">Add</button>-->
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public addValue: number = 0;


  public add():void{
   this.addValue += 1
   }


  public getDados:{nome:string, idade:number} | undefined

  public setDados(event:{nome:string, idade:number} ){
    this.getDados = event
  }
  constructor(){}

  ngOnInit(): void {}
}
