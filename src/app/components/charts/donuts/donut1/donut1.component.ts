import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as britecharts from 'britecharts/dist/bundled/britecharts.min';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut1',
  templateUrl: './donut1.component.html',
  styleUrls: ['./donut1.component.css']
})
export class Donut1Component implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef<HTMLDivElement>;

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


    const container = d3.select(this.chartContainer.nativeElement);

    const donut1 = britecharts.donut();
    const legend1 = britecharts.legend();

    donut1.isAnimated(true)
        .highlightSliceById(2)
        .width(200)
        .height(200)
        .externalRadius(200/2.5)
        .internalRadius(200/5)
        .on('customMouseOver', function(data) {
          legend1.highlight(data.data.id);
        })
          .on('customMouseOut', function() {
          legend1.clearHighlight();
        });

    legend1
      .width(300)
      .height(200)
      .numberFormat('s');

      container.datum(donutData.data).call(donut1);
  }

}
