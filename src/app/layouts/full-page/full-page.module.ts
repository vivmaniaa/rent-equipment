import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './full-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    FullPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class FullPageModule { }
