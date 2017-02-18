import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HelloService {
  value:String[];
  constructor(private http:Http){
  }
  toDo():Promise<string[]>{
    return this.http.get("http://localhost:8080/greeting")
    .toPromise().then(r=>r.json())
    .then(r=>this.value=r);
  } 
}
