
import * as d3plus from "d3plus";

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

    
    result.updateData = (d)=> {
        
    };

    return result;
}