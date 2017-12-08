import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CeiboShare } from 'ng2-social-share';
import { ListingService } from "../services/listing.service";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public repoUrl = 'https://github.com/vinodbeloshe12';


  config: any = {
    direction: 'horizontal',
    slidesPerView: '8',
    observer: true,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'slide',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: false
  };
  params: any;
  listingData: any;
  constructor(public activatedRoute: ActivatedRoute, private listingservice: ListingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.params = params;
      this.getCategoryData();
    });
  }

  getCategoryData() {
    this.listingservice.getAllListing(this.params.catid, this.params.subcatid).subscribe(res => {
      this.listingData = res;
      console.log("datta", this.listingData);
    });
  }

  hyphenateUrlParams(str: string) {
    // return str.replace(' ', '-');
    return str.replace(/ /g, '')
  }

}

export declare class FacebookParams {
  u: string;
}