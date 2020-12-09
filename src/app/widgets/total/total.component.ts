import { Component, OnInit } from '@angular/core';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';
import { SummaryComponent } from '../summary/summary.component';
import { SummaryService } from '../data.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {


  valueTitle = "Total value:";
  constructorsTitle = "Total number of the constructors:";
  totalPackages = "Total number of delivered packs:"
  
  DHLDataValue;
  inpostDataValue;

  DHLDataContractors;
  inpostDataContractors;

  DHLBarGraphData;
  inpostBarGraphData;

  summaryDHL = 0;
  summaryInpost = 0;

  constructor( dataService: SummaryService) { 
    this.DHLDataValue = dataService.getDHL().data[0]
    this.inpostDataValue = dataService.getInpost().data[0]

    this.DHLDataContractors = dataService.getDHL().data[1]
    this.inpostDataContractors = dataService.getInpost().data[1]

    this.inpostBarGraphData = dataService.getinpostBarGraphData()
    this.DHLBarGraphData = dataService.getDHLBarGraphData()

    this.DHLBarGraphData.data.forEach(value => {
      this.summaryDHL += value;
    });

    this.inpostBarGraphData.data.forEach(value => {
      this.summaryInpost += value;

    })


    




  }

  ngOnInit(): void {

  }

}
