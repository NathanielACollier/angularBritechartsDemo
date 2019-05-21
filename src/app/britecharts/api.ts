

import * as britecharts from 'britecharts/dist/bundled/britecharts.min';
import * as d3 from 'd3';

export interface IData{
    id: number;
}

export interface IDonutArguments{
    element: any,
    onClick?: (data: {data: IData}) => void,
    onMouseOver?: (data: {data: IData}) => void,
    onMouseOut?: () => void
}

export interface IDonutResult{
    updateData: (data: IData[]) => void;
}

export function donut(args: IDonutArguments): IDonutResult{

    let result = <IDonutResult>{

    };

    const container = d3.select(args.element);
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
        })
        .on('customClick', (data)=>{
          
        });

    legend1
      .width(300)
      .height(200)
      .numberFormat('s');

    container.datum(donutData.data).call(donut1);

    return result;
}