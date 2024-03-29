import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getAll(target:string){
    return this.http.get(this.url+target)
  }
  newAnimal(body:any)
  {
    return this.http.post(this.url+"allatok",body);
  }
}
