import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/commonInterface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input('data') data: any;
  @Input('paramOne') paramOne: string = '';
  @Input('navLink') navLink: boolean = true;
  @Input('imagePrefix') imagePrefix: string = './assets/category/';
  @Input('navPrefix') navPrefix: string = '/sub-category';
  @Input('breadcrumb') breadcrumb: Breadcrumb[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
