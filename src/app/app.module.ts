import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, BrowserXhr } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TabsModule } from "ngx-tabs";
import { FormsModule } from '@angular/forms';
import { CeiboShare } from 'ng2-social-share';
import { BarRatingModule } from "ngx-bar-rating";
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxEditorModule } from 'ngx-editor';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
// import { GoTopButtonModule } from 'ng2-go-top-button';

//components
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { LoginComponent } from './login/login.component';
import { EditlistingComponent } from './editlisting/editlisting.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
//services
import { HomePageService } from './services/home.service';
import { CategoryService } from "./services/category.service";
import { ListingService } from "./services/listing.service";
import { DetailService } from "./services/detail.service";
import { LoginService } from "./services/login.service";
import { FileService } from './services/file.service';
import { ContentComponent } from './content/content.component';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: '-',
    applicationName: 'Findacross',
    defaults: {
      title: 'Findacross - Free advertising site',
      description:
        'Findacross,free listing sites for b2b, b2c a local search engine. provides Best Deals, Hotels, Movies, Buses and Cabs in Bhandup Muumbai India',
      'og:image': '../assets/images/logo.png',
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US'
    }
  });
}



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
    LoginComponent,
    EditlistingComponent,
    ThankyouComponent,
    ContentComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule,
    TabsModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule,
    HttpClientModule,
    BarRatingModule,
    NgProgressModule,
    // GoTopButtonModule,
    LazyLoadImageModule,
    NgxEditorModule,
    TooltipModule.forRoot(),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory
    })
  ],

  providers: [HomePageService, FileService, CategoryService, ListingService, DetailService, LoginService, { provide: BrowserXhr, useClass: NgProgressBrowserXhr }],
  bootstrap: [AppComponent]
})
export class AppModule { }
