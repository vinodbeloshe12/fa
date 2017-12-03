import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailService } from "../services/detail.service";

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
  params: any;
  detailsData: any;

  constructor(public activatedRoute: ActivatedRoute, private detailservice: DetailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.params = params;
      this.getDetail();
    });
  }


  getDetail() {
    this.detailservice.getDetail(this.params.bid).subscribe(res => {
      this.detailsData = res;
      console.log("ddd", this.detailsData);
    });
  }
}
