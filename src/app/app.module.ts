import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GoTopButtonModule } from 'ng2-go-top-button';
import { Http, HttpModule, BrowserXhr } from '@angular/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TabsModule } from "ngx-tabs";
import { FormsModule } from '@angular/forms';
import { CeiboShare } from 'ng2-social-share';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
//services
import { HomePageService } from './services/home.service';
import { CategoryService } from "./services/category.service";
import { ListingService } from "./services/listing.service";
import { DetailService } from "./services/detail.service";
import { AddlistingComponent } from './addlisting/addlisting.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoryComponent,
    ListingComponent,
    DetailsComponent,
    CeiboShare,
    AddlistingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    TabsModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule
    // GoTopButtonModule,
    // BrowserAnimationsModule
  ],
  // exports: [GoTopButtonModule],
  providers: [HomePageService, CategoryService, ListingService, DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
