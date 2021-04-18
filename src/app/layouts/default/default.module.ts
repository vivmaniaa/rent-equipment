import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryComponent } from './components/category/category.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    CategoryComponent,
    BreadcrumbComponent,
    SubCategoryComponent,
    ListingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
