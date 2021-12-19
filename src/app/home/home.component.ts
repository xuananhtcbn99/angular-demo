import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'Xuan Anh';
  public age = 25;
  public traiCay = ['Tao', 'Nho', 'Cam'];
  public traiCay2 = [
    {ten: 'Tao', gia: 12, haGia: true},
    {ten: 'Nho', gia: -25, haGia: false},
    {ten: 'Cam', gia: 20, haGia: true},
    {ten: 'Buoi', gia: 18, haGia: false},
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('Trai cay = ', this.traiCay);
  }
  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

}
