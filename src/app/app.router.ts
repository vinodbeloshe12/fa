import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:name/:id', component: CategoryComponent },
  { path: 'listing/:cat/:catid/:subcat/:subcatid', component: ListingComponent },
  { path: ':bid', component: DetailsComponent },
  { path: 'detail/:bid', redirectTo: ':bid' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }