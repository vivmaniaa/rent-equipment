import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/commonInterface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input('data') data: Breadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
