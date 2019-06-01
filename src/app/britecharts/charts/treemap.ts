
import * as d3plus from "d3plus-treemap";

export interface ITreemapData{
    value: number;
    name: string;
}

export interface ITreemapArguments{
    element: any; // native element
    data: ITreemapData[];
    onClick?: (data: ITreemapData) => void;
}

export interface ITreemapResult {
    updateData: (data: ITreemapData[]) => void;
}

export function treemap(args: ITreemapArguments): ITreemapResult{
    let result = <ITreemapResult>{};

    let chart1 = new d3plus.Treemap()
    .data(args.data)
    .groupBy("name")
    .select(args.element)
    .sum("value")
    .render();
/*
    let viz = d3plus.Viz()
    .select(args.element)
    .data(args.data)  // data to use with the visualization
    .type("tree_map")   // visualization type
    .id("name")         // key for which our data is unique on
    .size("value")      // sizing of blocks
    .draw()             // finally, draw the visualization!
*/
    result.updateData = (d)=> {
        
    };

    return result;
}