import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

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

    private url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList(): Observable<FoodList>{
    return this.http.get<FoodList>(`${this.url}lis-food`).pipe(
      res => res,
      error => error
      )
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}
