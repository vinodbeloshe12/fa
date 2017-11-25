import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  config: any = {
    direction: 'horizontal',
    slidesPerView: '1',
    observer: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction: false,
    effect: 'coverflow',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: true
  };

  constructor() { }

  ngOnInit() {
  }

}
