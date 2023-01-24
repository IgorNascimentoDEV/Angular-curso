import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter;

  private list: Array<string>=[
    "X-bacon",
    "Ovo",
    "Galinha"
  ];

  constructor() { }

  public foodList(){
    return this.list;
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}
