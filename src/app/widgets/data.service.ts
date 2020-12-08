import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  DHL = {
    name: 'DHL',
    data: [1257689, 657483, 63556]
  }
  inpost = {
    name: 'InPost',
    data: [1337584, 937268, 947234]
}

  DHLBarGraphData = {
      name: 'DHL',
      data: [20, 40, 120, 150, 156, 166, 170, 250, 320, 340, 420, 430]
   }
  
   inpostBarGraphData = {
      name: 'InPost',
      data: [50, 45, 103, 143, 189, 254, 345, 367, 390, 392, 470, 554]
   }
  

getDHL () {
  return this.DHL
}

getInpost () {
  return this.inpost
}

getDHLBarGraphData () {
  return this.DHLBarGraphData
}

getinpostBarGraphData () {
  return this.inpostBarGraphData
}

  constructor() { }
}
