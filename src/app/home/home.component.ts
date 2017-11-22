import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  config: any = {
    direction: 'horizontal',
    slidesPerView: '1',
    observer: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction: false,
    effect:'coverflow',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: true
  };


  sliderImages=[
    {image:'assets/images/bg/1.jpg'},
    {image:'assets/images/bg/2.jpg'},
    {image:'assets/images/bg/3.jpg'}
]
  
  constructor() { }

  ngOnInit() {
  }

}
