import {Component, OnInit} from "@angular/core";
import {HelloService} from "./app.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [HelloService]
})

export class AppComponent implements OnInit {
  value: String = "offline";

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.connect().subscribe(r => this.value = r.json());
  }
}
