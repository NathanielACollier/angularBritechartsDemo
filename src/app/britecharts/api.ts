

import * as britecharts from 'britecharts/dist/bundled/britecharts.min';
import * as d3 from 'd3';

const minimumChartHeight = 50;
const minimumChartWidth = 50;

// data schemas defined here: https://eventbrite.github.io/britecharts/global.html#BarChartData__anchor
export interface IBarChartData{
  value: number;
  name: string;
}





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

interface ID3SelectionResult{
  container: any;
  width: number;
  height: number;
}

function d3Select(element: any): ID3SelectionResult{
  const container = d3.select(element);
  let rect = container.node() ? container.node().getBoundingClientRect() : null;
  let width = rect ? rect.width : false;
  let height = rect ? rect.height : false;
  
  return {
    container: container,
    width: width,
    height: height
  };
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

    donut1.isAnimated(true)
        .highlightSliceById(2)
        .width(selection.width)
        .height(selection.height)
        .externalRadius(selection.width/2.5)
        .internalRadius(selection.width/5)
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