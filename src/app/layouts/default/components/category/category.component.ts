import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch, Breadcrumb, Category, Location } from 'src/app/commonInterface';
import * as data from '../../catalog.json';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  jsonData:any = data;
  categories: Category[] = [];
  currentBranch: string ='';
  breadcrumb: Breadcrumb[] = [{title: "Equipment catelog"}]


  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      if(!params.branch) this._router.navigate(['/']);
      const branch: Branch = this.jsonData.default.data.locations.reduce((selectBranch:Branch, location:any, index: number)=>{
        const branch = location.branches.find((branch:Branch)=>branch.branch_id===params.branch);
        if(branch) selectBranch = branch;
        return selectBranch;
      }, false);
      if(!branch || !branch.categories.length) this._router.navigate(['/']);
      this.categories = branch.categories
      this.currentBranch = params.branch; 
    })
  }

}
