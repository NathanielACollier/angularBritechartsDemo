import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as britechartsAPI from '../../../../britecharts/api';

@Component({
  selector: 'app-donut1',
  templateUrl: './donut1.component.html',
  styleUrls: ['./donut1.component.css']
})
export class Donut1Component implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;

  constructor() { }

  ngOnInit() {

    let donutData = {
      data:[
        {name: "Shiny", id: 1, quantity: 86},
        {name: "Blazing", id: 2, quantity: 300},
        {name: "Dazzling", id: 3, quantity: 276},
        {name: "Radiant", id: 4, quantity: 195},
        {name: "Sparkling", id: 5, quantity: 36},
        {name: "Other", id: 0, quantity: 814}
      ]
    };

    britechartsAPI.donut({
      element: this.chartContainer.nativeElement,
      data: donutData.data,
      onClick: (data)=>{
        console.log(`Clicked: ${data.data.id}`);
      }
    });

    

  
  }

}
