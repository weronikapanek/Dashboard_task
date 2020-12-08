import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_gantt from 'highcharts/modules/gantt';
import { SummaryService } from '../data.service';

HC_gantt(Highcharts);

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {


DHLDataValue;
inpostDataValue;
  
  constructor( dataService: SummaryService) { 

    this.DHLDataValue = dataService.getDHL()
    this.inpostDataValue = dataService.getInpost()
    this.chartGantt.series.push(this.DHLDataValue)
    this.chartGantt.series.push(this.inpostDataValue)

  }
  
Highcharts: typeof Highcharts = Highcharts;
chartGantt = {
  chart: {
      type: 'bar',
  },
  title: {
      text: 'Summary'
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: ['Value', 'Package Quantity', 'Number of contractors'],
      title: {
          text: null
      }
  },
  yAxis: {
      
      title: {
          text: 'Thousand',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' thousand'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -2,
      y: 120,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend!.backgroundColor || 'none',
      shadow: true
  },
  credits: {
    enabled: false
 },
 exporting: {
    enabled: true
 },
  series: <any>[]
}
}          