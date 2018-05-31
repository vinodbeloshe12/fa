import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from "@ngx-meta/core";

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { EditlistingComponent } from './editlisting/editlisting.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [{
  path: "",
  canActivateChild: [MetaGuard],
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home', component: HomeComponent,
      data: {
        meta: {
          title: "Home page",
          description: "Findacross,free listing sites for b2b, b2c a local search engine. provides Best Deals, Hotels, Movies, Buses and Cabs in Bhandup Muumbai India"
        }
      }
    },
    {
      path: 'category/:name/:id', component: CategoryComponent,
      data: {
        meta: {
          title: "Category page",
          description: "Findacross,free listing site in bhandup Muumbai India"
        }
      }
    },
    {
      path: 'listing/:cat/:catid/:subcat/:subcatid', component: ListingComponent,
      data: {
        meta: {
          title: "Subcategory page",
          description: "Findacross,free listing site in bhandup Muumbai India"
        }
      }
    },
    {
      path: 'addlisting', component: AddlistingComponent,
      data: {
        meta: {
          title: "Add listing page",
          description: "Findacross,free listing site in bhandup Muumbai India"
        }
      }
    },
    { path: 'editprofile', component: EditlistingComponent },
    { path: 'login', component: LoginComponent },
    { path: ':bid', component: DetailsComponent },
    { path: 'detail/:bid', redirectTo: ':bid' },
    { path: 'welcome/:bid', component: ThankyouComponent },
    { path: 'content/:id', component: ContentComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }