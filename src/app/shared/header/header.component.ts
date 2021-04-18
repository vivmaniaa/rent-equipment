import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../commonInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('locations') locations: Location[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
