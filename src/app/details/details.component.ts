import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailService } from "../services/detail.service";
import { AppConst } from "../app.constants";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  imgUrl = AppConst.imgUrl;
  config: any = {
    direction: 'horizontal',
    slidesPerView: '5',
    observer: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction: false,
    effect: 'slide',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: false
  };
  defaultrating = 1;
  params: any;
  detailsData: any;
  listingImage;
  openReview = false;
  reviewData = {};
  services: any = [];
  constructor(public activatedRoute: ActivatedRoute, private detailservice: DetailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.params = params;
      this.getDetail();
    });
  }

  writeReview() {
    this.openReview = !this.openReview;
  }
  addReview(val) {
    val.bid = this.params.bid;
    this.detailservice.addReview(val).subscribe((res) => {
      this.getDetail();
      this.reviewData = {};
    },
      err => console.log(err));
  }
  changeImage(val) {
    this.listingImage = val;
  }
  getDetail() {
    this.detailservice.getDetail(this.params.bid).subscribe(res => {
      this.detailsData = res;
      if (res && res.images.length > 0) {
        this.listingImage = res.images[0].image;
        this.services = this.detailsData.details.services ? this.detailsData.details.services.split(',') : [];
      }
    });
  }
}
