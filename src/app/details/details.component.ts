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
    slidesPerView: '5',
    observer: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction: false,
    effect: 'slide',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: false
  };
  params: any;
  detailsData: any;
  listingImage;
  openReview = false;
  reviewData = {};
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
      }
    });
  }
}
