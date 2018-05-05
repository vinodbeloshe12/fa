import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services/home.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  params: any;
  contentData: any;

  constructor(public activatedRoute: ActivatedRoute, private homePageService: HomePageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.params = params;
      this.getContent(this.params.id);
    });
  }

  getContent(id) {
    this.homePageService.getContentData(id).subscribe(res => {
      this.contentData = res;
    })
  }

}
