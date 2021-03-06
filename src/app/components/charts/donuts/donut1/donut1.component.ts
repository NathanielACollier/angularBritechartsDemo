import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as britechartsAPI from '../../../../britecharts';

@Component({
  selector: 'app-donut1',
  templateUrl: './donut1.component.html',
  styleUrls: ['./donut1.component.css']
})
export class Donut1Component implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @ViewChild('legendContainer') legendContainer: ElementRef;
  chart1: britechartsAPI.IDonutResult;

  constructor() { }

  ngOnInit() {

    let chartData: britechartsAPI.IDonutData[] = [
      {name: "Shiny", id: 1, quantity: 86},
      {name: "Blazing", id: 2, quantity: 300},
      {name: "Dazzling", id: 3, quantity: 276},
      {name: "Radiant", id: 4, quantity: 195},
      {name: "Sparkling", id: 5, quantity: 36},
      {name: "Other", id: 0, quantity: 814}
    ];

    this.chart1 = britechartsAPI.donut({
      element: this.chartContainer.nativeElement,
      legendElement: this.legendContainer.nativeElement,
      data: chartData,
      onClick: (data)=>{
        console.log(`Clicked: ${data.id}`);
      }
    });

  }

  updateChartData(){
    this.chart1.updateData([
      {name:"Tuesday", id:7, quantity: 10},
      {name: "Biscuit", id:8, quantity: 25}
    ])
  }
  

}
