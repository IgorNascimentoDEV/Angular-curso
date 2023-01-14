import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{

  public nome:string = "Igor";
  public idade:number = 21;


  public checkDisabled:boolean = false;
  public imgSrc:string = "https://www.50a.fr/img/upload/Angular.png"
  public imgTitle:string= "property binding"


  public alertInfo(valor: MouseEvent){
    console.log(valor)
  }


  public position: {x:number, y:number} = {x: 0 , y: 0}
  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
  constructor(){}

  ngOnInit(): void {}

}
