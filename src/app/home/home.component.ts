import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'Xuan Anh';

  public age = 25;

  constructor() { }

  ngOnInit(): void {
  }
  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

}
