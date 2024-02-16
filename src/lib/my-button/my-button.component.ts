import { Component, OnInit } from '@angular/core';
import { MyButtonService } from './my-button.service';


@Component({
  selector: 'lib-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  greetingText = '';

  constructor(private myButtonService: MyButtonService) {}

  ngOnInit() {

  }

  setGreeting() {
    this.greetingText = this.myButtonService.getGreeting();
  }
}
