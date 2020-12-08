import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './widgets/bar-graph/bar-graph.component';
import { SummaryComponent } from './widgets/summary/summary.component';
import { MapComponent } from './widgets/map/map.component';
import { TotalComponent } from './widgets/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    SummaryComponent,
    MapComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  exports: [
    BarGraphComponent,
    SummaryComponent,
    MapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
