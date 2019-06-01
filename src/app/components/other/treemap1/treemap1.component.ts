import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as charts from 'src/app/britecharts';

@Component({
  selector: 'app-treemap1',
  templateUrl: './treemap1.component.html',
  styleUrls: ['./treemap1.component.css']
})
export class Treemap1Component implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  chart1: charts.ITreemapResult;

  constructor() { }

  ngOnInit() {
    let data : charts.ITreemapData[] = [
      {name: "Biscuit", value: 50},
      {name: "Cruizant", value: 50},
      {name: "Milk", value: 100},
      {name: "Hot Dog", value: 200}
    ];

    this.chart1 = charts.treemap({
      element: this.chartContainer.nativeElement,
      data: data
    });
  }

  updateChartData(){

  }

}
