import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailService } from "../services/detail.service";
import { AppConst } from "../app.constants";
import { MetaService } from "@ngx-meta/core";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  imgUrl = AppConst.imgUrl;
  enquiryData: any = {};
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
  constructor(public activatedRoute: ActivatedRoute, readonly meta: MetaService, private detailservice: DetailService) { }

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


  addEnquiry(data) {
    data.bid = this.params.bid;
    this.detailservice.enquiry(data).subscribe((res) => {
      this.enquiryData = {};
    },
      err => console.log(err));

  }
  changeImage(val) {
    this.listingImage = val;
  }
  getDetail() {
    this.detailservice.getDetail(this.params.bid).subscribe(res => {
      this.enquiryData = {};
      this.detailsData = res;
      if (res && res.images.length > 0) {
        this.listingImage = res.images[0].image;
        this.services = this.detailsData.details.services ? this.detailsData.details.services.split(',') : [];
        this.meta.setTitle(`${this.detailsData.details.buisnessname}`);
        this.meta.setTag("keywords", `${this.detailsData.details.buisnessname}` + ' in Mumbai,' + `${this.services}` + ' in Bhandup, Mumbai');
        this.meta.setTag("description", `${this.detailsData.details.buisnessname}` + ',' + `${this.detailsData.details.category}` + ', ' + `${this.detailsData.details.category}` + ', ' + `${this.services}` + ' in Bhandup, Mumbai');

      }
    });
  }
}
