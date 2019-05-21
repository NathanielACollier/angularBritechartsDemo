
import * as britecharts from 'britecharts/dist/bundled/britecharts.min';
import { d3Select } from '../d3Helper';

// data schemas defined here: https://eventbrite.github.io/britecharts/global.html#BarChartData__anchor
export interface IBarChartData{
    value: number;
    name: string;
}

