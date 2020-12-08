import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SummaryService} from '../data.service'
@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   DHLData;
   inpostData;

   DHLBarValue;
   inpostBarValue;

  constructor( dataService: SummaryService) { 

   this.inpostData = dataService.getinpostBarGraphData()
   this.DHLData = dataService.getDHLBarGraphData()
   this.data.push(this.DHLData)
   this.data.push(this.inpostData)

   this.inpostBarValue = dataService.getinpostBarGraphData()
   this.DHLBarValue = dataService.getDHLBarGraphData()

 }

  title = 'production';
 
  data = <any>[];
 
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: "spline"
    },
    title: {
       text: "Number of delivered packages 2020"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {          
       title:{
          text:"Thousand"
       } 
    },
    credits: {
       enabled: false
    },
    exporting: {
       enabled: true
    },
    series: this.data
   
  };
  
}