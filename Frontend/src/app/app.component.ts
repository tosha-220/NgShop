import { Component,OnInit} from '@angular/core';
import {HelloService} from './app.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [HelloService]
})

export class AppComponent implements OnInit{ 
  value=["offline"];
  constructor(private helloService: HelloService) { 
    }

  ngOnInit(): void {
    this.helloService.toDo().then(value=>this.value=value);
  }
}
