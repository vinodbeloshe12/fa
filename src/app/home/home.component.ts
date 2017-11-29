import { Component, OnInit } from '@angular/core';
import { HomePageService } from "../services/home.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  homeData: any;
  showCategoryTo: number = 2;
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


  constructor(private homepageservice: HomePageService) { }



  ngOnInit() {
    this.getHomeData();
  }

  getHomeData() {
    this.homepageservice.getHomeData().subscribe(res => {
      this.homeData = res;
    });
  }
  showMoreCategory() {
    if (this.homeData) {
      this.showCategoryTo = this.homeData.category.length;
    }
  }

}
