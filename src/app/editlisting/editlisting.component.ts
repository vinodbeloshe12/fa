import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css']
})
export class EditlistingComponent implements OnInit {
  images: any;
  errorMessage: any;
  userData: any;

  constructor(private fileService: FileService) { }
  listingData: any = {};
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    this.listingData = this.userData.details;
    this.getImageData();
  }

  getImageData() {
    this.fileService.getImages().subscribe(
      data => { this.images = data.result },
      error => this.errorMessage = error
    )
  }

}
