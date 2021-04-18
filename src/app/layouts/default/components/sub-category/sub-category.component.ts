import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Location, SubCategories, Breadcrumb } from 'src/app/commonInterface';
import * as data from "./../../catalog.json";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  category: string = '';
  jsonData: any;
  subCategories: SubCategories[] = [];
  imagePrefix: string = './assets/category/subcategory/';
  breadcrumb: Breadcrumb[] = [{title: 'Equipment Catelog'}];
  locationIndex: number = -1;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.jsonData = data;
    this._route.params.subscribe(params => {
      if(!params.branch || !params.category) this._router.navigate(['/']);
      this.category = params.category;
      const category: Category = this.jsonData.default.data.locations.reduce((selectCategory: Category, location:Location, index: number)=>{
        let branch = location.branches.find(branch=>branch.branch_id === params.branch);
        if(branch){
          const category = branch.categories.find((category:Category)=>category.name === params.category);
          if(category) selectCategory = category; 
        }
        return selectCategory;
      }, false);
      if(!category || !category.subcategories.length) this._router.navigate(['/']);
      this.subCategories = category.subcategories;
      this.breadcrumb.push({ title: params.category})

    })
  }

}
