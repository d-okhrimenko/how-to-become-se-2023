import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  message: string = "hello";

  change() {
    this.message = "HELLO WORLD";
  }
}
