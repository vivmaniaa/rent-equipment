import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './layouts/default/components/category/category.component';
import { DashboardComponent } from './layouts/default/components/dashboard/dashboard.component';
import { SubCategoryComponent } from './layouts/default/components/sub-category/sub-category.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PageNotFoundComponent } from './layouts/full-page/components/page-not-found/page-not-found.component';
import { FullPageComponent } from './layouts/full-page/full-page.component';

const routes: Routes = [
  {path: '', component: DefaultComponent, children:[
    {path: '', component: DashboardComponent },
    {path: 'category/:branch',  component: CategoryComponent },
    {path: 'sub-category/:branch/:category',  component: SubCategoryComponent }
  ] },

  { path: "**", pathMatch: 'full',  component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
