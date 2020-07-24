import { Component, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { GraphService } from './graph.service '
import { range } from 'rxjs';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  range = [180, 200, 251, 270]
  selectedValue: any;
  onChange($event) {
    console.log($event);
    this.fetchData($event);
  }
  private chart: am4charts.XYChart;
  // _graphService: any;

  //

  constructor(private zone: NgZone,
    private _graphService: GraphService) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data

      chart.data = [];
      // this._graphService.fetch().subscribe(
      //   data => {
      //     this.chart = data;
      //   });

      // Create axes

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
       //code goes here

      categoryAxis.dataFields.category = "username";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      // categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      //   if (target.dataItem && target.dataItem.index & 2 == 2) {
      //     return dy + 25;
      //   }
      //   return dy;
      // });

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "score";
      series.dataFields.categoryX = "username";
      series.name = "score";
      series.sequencedInterpolation = true;
      series.calculatePercent = true;
      series.stacked = true;
      series.columns.template.width = am4core.percent(60);
      // series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: [bold]{valueY.percent}%";
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]%";
      // Configure legend
      series.legendSettings.itemValueText = "{valueY.percent}%";
      series.columns.template.fillOpacity = .8;
      // var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      //   labelBullet.label.text = "{valueY.percent}%";
      let columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;
      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();

      }
    });
  }
  fetchData($event) {
    this._graphService.fetch($event).subscribe(
      data => {
        this.chart.data = data.result
        console.log(data);


      });
  }
  ngOnInit() {
    this.fetchData(200);

    this.selectedValue = 200;

  }

}





