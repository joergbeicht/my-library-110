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

  userData = [
    { key: 'User', value: 'John Doe' },
    { key: 'Group', value: 'Cariad' },
    { key: 'Role', value: 'Admin' },
    { key: 'Email', value: 'extern.john.doe@cariad.technology' },
  ];

  constructor(private myButtonService: MyButtonService) {}

  useDependencieComponent() {
    this.listOfData = this.myButtonService.doSomething();
  }

}
