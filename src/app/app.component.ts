import { Component } from '@angular/core';
import { MyButtonService } from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-workspace';

  listOfData: any;

  constructor(private myButtonService: MyButtonService) {}

  useDependencieComponent() {
    this.listOfData = this.myButtonService.doSomething();
  }

}
