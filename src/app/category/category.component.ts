import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  config: any = {
    direction: 'horizontal',
    slidesPerView: '8',
    observer: true,
   paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect:'slide',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: false
  };

  constructor() { }

  category=[
    {
name:"Doctors",
icon:"fa fa-user-md"
  },
  {
    name:"Hotel",
    icon:"fa fa-building-o"
  },
  {
    name:"Test",
    icon:"fa fa-user-md"
  },
  {
    name:"Test5",
    icon:"fa fa-user-md"
  },
  {
    name:"testing text for more thane on line",
    icon:"fa fa-user-md"
  },
  {
    name:"ghjghjhjhj sdjsjj ",
    icon:"fa fa-user-md"
  },
  {
    name:"Doctors",
    icon:"fa fa-user-md"
      },
      {
        name:"Hotel",
        icon:"fa fa-building-o"
      },
      {
        name:"Test",
        icon:"fa fa-user-md"
      },
      {
        name:"Test5",
        icon:"fa fa-user-md"
      },
      {
        name:"asdfff",
        icon:"fa fa-user-md"
      },
      {
        name:"ghjghjhjhj",
        icon:"fa fa-user-md"
      }
]

  ngOnInit() {
  }

}
