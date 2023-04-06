import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke,
  responsive: ApexResponsive[];
  dataLabels: any;
  fill: ApexFill;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [60.05],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -20,
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar:{

        },
        radialBar: {         
          // startAngle: -90,
          // endAngle: 90,     
          startAngle: -115,
          endAngle: 115,     
          track: {
            show: true,
            background: "#EFEFEF",
            strokeWidth: "95%",
            margin: 7, // margin is in pixels
            dropShadow: {
              // enabled: true,
              // top: 2,
              // left: 0,
              // opacity: 0.31,
              // blur: 2
              // enabled: true,
              // top: -3,
              // left: 0,
              // blur: -2,
              // opacity: 0.35
              enabled: true,              
              top: 0,
              left: 0,
              blur: 2,
              color: '#000',
              opacity: 0.31
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -33,
              show: true,
              color: '#888',
              fontSize: '11px'
            },
            value: {
              offsetY: -2,
              formatter(value:any):any {
                return value+"%";
              },
              color: '#111',
              fontSize: '30px',
              fontFamily:"Nunito Sans",
              fontWeight:"700",
              show: true,
            }
          }         
        }
      },
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shade: "light",
      //     shadeIntensity: 0.4,
      //     inverseColors: false,
      //     opacityFrom: 1,
      //     opacityTo: 1,
      //     stops: [0, 50, 53, 91]
      //   }
      // },
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shade: "dark",
      //     type: "horizontal",
      //     shadeIntensity: 0.5,
      //     gradientToColors: ["#ABE5A1"],
      //     inverseColors: true,
      //     opacityFrom: 1,
      //     opacityTo: 1,
      //     stops: [0, 100]
      //   }
      // },
      fill: {
        opacity: 0.9,
        colors: ['#9FDCEE'],
        type: "gradient",
        // type: 'solid',
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.4,
          gradientToColors: ["#5CD8F4"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        show: true,
        lineCap: "round",
        curve: 'smooth',
        width: 82,
        dashArray: 90, 
      },
      labels: ["PORCENTAJE PAGADO"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
          }
        }
      ]
    };
    // let target = document.querySelectorAll('.apexcharts-series:nth-of-type(1) > path')
    // var chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
    //     chart.render();
  

  }
}
