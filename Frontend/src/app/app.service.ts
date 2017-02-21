import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Hello} from "./api/Hello";
import {baseUrl} from "./common";
import "rxjs/add/operator/map";


@Injectable()
export class HelloService {

  constructor(private http: Http) {
  }

  connect(): Observable<Hello> {
    return this.http.get(baseUrl).map(res => res.json());
  }
}
