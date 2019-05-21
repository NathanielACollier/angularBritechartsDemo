

import * as britecharts from 'britecharts/dist/bundled/britecharts.min';
import { d3Select } from '../d3Helper';
import { minimumChartWidth, minimumChartHeight } from '../settings';


export interface IDonutData{
    id: number;
    name: string;
    quantity: number;
}

export interface IDonutArguments{
    element: any,
    legendElement?: any,
    data: IDonutData[],
    onClick?: (data: {data: IDonutData}) => void,
    onMouseOver?: (data: {data: IDonutData}) => void,
    onMouseOut?: () => void
}

export interface IDonutResult{
    updateData: (data: IDonutData[]) => void;
}



export function donut(args: IDonutArguments): IDonutResult{

    let result = <IDonutResult>{

    };

    const selection = d3Select(args.element);
    let legend1 = null;
    let legendSelection = null;

    if( args.legendElement){
      legendSelection = d3Select(args.legendElement);

      if( legendSelection.width < minimumChartWidth ){
        console.error(`Donut legend element has a width less than ${minimumChartWidth}`)
      }

      if( legendSelection.height < minimumChartHeight){
        console.error(`Donut legend element has a height less than ${minimumChartHeight}`);
      }

      legend1 = britecharts.legend();

      legend1
        .width(legendSelection.width)
        .height(legendSelection.height)
        .numberFormat('s');
    }
    
    const donut1 = britecharts.donut();
    
    if( selection.width < minimumChartWidth ){
      console.error(`Donut chart element has a width less than ${minimumChartWidth}`);
    }

    if( selection.height < minimumChartHeight ){
      console.error(`Donut chart element has a height less than ${minimumChartHeight}`);
    }

    let circleDiameter = selection.height > selection.width ? selection.width :
                            selection.height;

    donut1.isAnimated(true)
        .highlightSliceById(2)
        .width(circleDiameter)
        .height(circleDiameter)
        .externalRadius(circleDiameter/2.5)
        .internalRadius(circleDiameter/5)
        .on('customMouseOver', function(data) {
          if( legend1 ){
            legend1.highlight(data.data.id);
          }
          if( args.onMouseOver){
            args.onMouseOver(data);
          }
          
        })
        .on('customMouseOut', function() {
          if( legend1 ){
            legend1.clearHighlight();
          }
          if( args.onMouseOut ){
            args.onMouseOut();
          }
          
        })
        .on('customClick', (data)=>{
          if( args.onClick){
            args.onClick(data);
          }
          
        });

    result.updateData = (data) => {
        selection.container.datum(data).call(donut1);

        if( args.legendElement){
          legendSelection.container.datum(data).call(legend1);
        }
    };

    result.updateData(args.data); // make sure the chart gets displayed    

    return result;
}