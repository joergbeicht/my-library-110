import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { MyButtonService } from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private myButtonService: MyButtonService
  ) {}  
  
  ngOnInit() {
    this.switchMode(true);
  }

  useDependencieComponent() {
    this.listOfData = this.myButtonService.doSomething();
  }

  switchMode(isDarkMode: boolean) {
    const hostClass = isDarkMode ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }

}
