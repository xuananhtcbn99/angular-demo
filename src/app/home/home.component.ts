import {Component, OnInit} from '@angular/core';

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
  ];

  public districts: string[] = ['Quan/Huyen'];
  public vietnamData = [
    {city: "Chon thanh pho", district: ['Quan/Huyen']},
    {
      city: 'Bắc Ninh',
      district: ["Thành phố Bắc Ninh", "Thị xã Từ Sơn", "Huyện Gia Bình", "Huyện Lương Tài", "Huyện Quế Võ", "Huyện Thuận Thành", "Huyện Tiên Du", "Huyện Yên Phong"]
    },
    {
      city: 'Bắc Giang',
      district: ["Thành phố Bắc Giang", "Huyện Hiệp Hòa", "Huyện Lạng Giang", "Huyện Lục Nam", "Huyện Lục Ngạn", "Huyện Sơn Động", "Huyện Tân Yên", "Huyện Việt Yên", "Huyện Yên Dũng", "Huyện Yên Thế"]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('vietnamData = ', this.vietnamData);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public changeCity(event: any):void {
    const city = event.target.value;
    if (!city) {
      return;
    }
    //cach 1
    // const search= this.vietnamData.filter(data => data.city === city);
    // console.log('search', search);
    // if (search && search.length >0) {
    //   this.districts = search[0].district;
    // }

    //cach 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }

}
