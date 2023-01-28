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

  public foodList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(`${this.url}lis-food`).pipe(
      res => res,
      error => error
      )
  }

  // public foodListAdd(value: string){
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  public foodListAdd(value: string):Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}lis-food`, {nome: value}).pipe(
      res => res,
      error => error
    );

  }

  // public foodListAlert(value: string){
  //   return this.emitEvent.emit(value);
  // }

  public foodListAlert(value: FoodList){
   return this.emitEvent.emit(value);
  }

  public foodListEdit(value: string, id: number):Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}lis-food/${id}`, {nome: value}).pipe(
      res => res,
      error => error
    );
  }

  public foodListDelete(id: number):Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}lis-food/${id}`).pipe(
      res => res,
      error => error
    );
  }

}
