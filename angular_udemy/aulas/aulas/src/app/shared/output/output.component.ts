import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  public list:Array<{nome:string, idade:number}> = [
    {nome: "Igor Nascimento", idade: 22},
    {nome: "Isabele Maria Nascimento", idade: 21},
    {nome: "Maria Isadora Nascimento", idade: 2}
  ]

  @Output() public enviarDados = new EventEmitter();

  public getDados(event:number){
    this.enviarDados.emit(this.list[event]);
  }

}
