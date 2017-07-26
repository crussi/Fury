import { Component, OnInit, Input } from '@angular/core';
import { D3ChartService, D3 } from "../../../charts/nvD3/nvD3.service";

@Component({
  selector: 'ms-widget-v1',
  templateUrl: './widget-v1.component.html',
  styleUrls: ['./widget-v1.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input('data')
  data: any;

  @Input('options')
  options: any;

  chartOptions: any;

  d3: D3;

  constructor(
    d3ChartService: D3ChartService
  ) {
    this.d3 = d3ChartService.getD3();
  }

  ngOnInit() {
    let d3 = this.d3;

    this.chartOptions = {
      chart: {
        type: 'lineChart',
        height: 60,
        margin : {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        },
        x: (d) => { return d.date; },
        y: (d) => { return d.value; },
        showXAxis: false,
        showYAxis: false,
        xAxis: {
          ticks: d3.time.days,
          axisLabel: '',
          tickFormat: (d) => {
            return d3.time.format('%a %d.%m.%Y')(new Date(d));
          }
        },
        interpolate: 'cardinal',
        showLegend: false,
        useInteractiveGuideline: true
      },
    };
  }
}
