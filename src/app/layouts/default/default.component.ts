import { Component, OnInit } from '@angular/core';
import * as data from './catalog.json';
import { Location } from '../../commonInterface'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  jsonData: any = data;
  locations:Location[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.locations = this.jsonData.default.data.locations;
  }

}
