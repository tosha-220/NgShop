import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HelloService {

  constructor(private http: Http) {
  }

  connect(): Observable<Response> {
    return this.http.get("http://localhost:8080/");
  }
}
