import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condicao:boolean = true;
  public condicaoClick:boolean = true;


  public list:Array<{nome:string, idade:number}> = [
    {nome: "Igor Nascimento", idade: 22},
    {nome: "Isabele Maria", idade: 21},
    {nome: "Maria Isadora", idade: 2}]

  constructor(){}

  ngOnInit(): void {
    setInterval(()=>{
      if(this.condicao){
        this.condicao = false
      }else{
        this.condicao= true
      }

    }, 2000)
  }

  public onClick(){
    if(this.condicaoClick){
      this.condicaoClick = false
    }else{
      this.condicaoClick= true
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Italo Nascimento", idade: 0})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

  public nome:string = 'Isabele'
}
