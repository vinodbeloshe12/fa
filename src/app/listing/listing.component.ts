import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
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
  constructor() { }


  category = [
    {
      name: "Subcat1",
      icon: "fa fa-user-md"
    },
    {
      name: "Subcat2",
      icon: "fa fa-building-o"
    },
    {
      name: "Subcat3",
      icon: "fa fa-user-md"
    },
    {
      name: "Subcat4",
      icon: "fa fa-user-md"
    },
    {
      name: "Subcat6",
      icon: "fa fa-user-md"
    }
  ]
  ngOnInit() {
  }

}
