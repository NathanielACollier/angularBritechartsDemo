
import * as d3 from 'd3';

export interface ID3SelectionResult{
    container: any;
    width: number;
    height: number;
}
  
export function d3Select(element: any): ID3SelectionResult{
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