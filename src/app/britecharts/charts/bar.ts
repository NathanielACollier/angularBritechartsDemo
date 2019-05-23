
import * as britecharts from 'britecharts/dist/bundled/britecharts.min';
import { d3Select } from '../d3Helper';

// data schemas defined here: https://eventbrite.github.io/britecharts/global.html#BarChartData__anchor
export interface IBarChartData{
    value: number;
    name: string;
}

export interface IBarChartResult{
    updateData: (data: IBarChartData[]) => void;
}

export interface IBarChartArguments{
    element: any,
    data: IBarChartData,
    isHorizontal?: boolean,
    onClick?: (data: IBarChartData) => void,
    onMouseOver?: (data: IBarChartData) => void,
    onMouseOut?: () => void
}

export function bar(args: IBarChartArguments): IBarChartResult{
    let result = <IBarChartResult>{

    };

    const selection = d3Select(args.element);

    if(!args.isHorizontal){
        args.isHorizontal = false;
    }
    // was following this: https://eventbrite.github.io/britecharts/tutorial-bar.html
    const bar = britecharts.isHorizontal(args.isHorizontal)
                        .isAnimated(true)
                        .colorSchema(britecharts.colors.colorSchemas.brite)
                        .width(selection.width)
                        .height(selection.height)
                        .on('customClick', (data: {data: IBarChartData})=>{
                            if( args.onClick){
                                args.onClick(data.data);
                            }
                        })
                        .on('customMouseOver', (data: {data: IBarChartData})=>{
                            if( args.onMouseOver){
                                args.onMouseOver(data.data);
                            }
                        })
                        .on('customMouseOut', ()=>{
                            if( args.onMouseOut ){
                                args.onMouseOut();
                            }
                        });

    
    
    return result;
}