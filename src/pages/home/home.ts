import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as HighCharts from 'highcharts';
import * as HighChartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';

HighChartsMore(HighCharts);
SolidGauge(HighCharts);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    /* global document */
// Load the fonts
    HighCharts.createElement('link', {
      href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
      rel: 'stylesheet',
      type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
    HighCharts.wrap(HighCharts.Chart.prototype, 'getContainer', function (proceed) {
      proceed.call(this);
      this.container.style.background =
        'transparent';
      this.container.style.width = '100%';
    });

    HighCharts.theme = {
      colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
        backgroundColor: null,
        style: {
          fontFamily: 'Signika, serif'
        }
      },
      title: {
        style: {
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
      subtitle: {
        style: {
          color: 'black'
        }
      },
      tooltip: {
        borderWidth: 0
      },
      legend: {
        itemStyle: {
          fontWeight: 'bold',
          fontSize: '13px'
        }
      },
      xAxis: {
        labels: {
          style: {
            color: '#6e6e70'
          }
        }
      },
      yAxis: {
        labels: {
          style: {
            color: '#6e6e70'
          }
        }
      },
      plotOptions: {
        series: {
          shadow: true
        },
        candlestick: {
          lineColor: '#404048'
        },
        map: {
          shadow: false
        }
      },

      // Highstock specific
      navigator: {
        xAxis: {
          gridLineColor: '#D0D0D8'
        }
      },
      rangeSelector: {
        buttonTheme: {
          fill: 'white',
          stroke: '#C0C0C8',
          'stroke-width': 1,
          states: {
            select: {
              fill: '#D0D0D8'
            }
          }
        }
      },
      scrollbar: {
        trackBorderColor: '#C0C0C8'
      },

      // General
      background2: '#E0E0E8'

    };
    // Apply the theme
    HighCharts.setOptions(HighCharts.theme);
    HighCharts.chart('speedometer-container', {
        chart: {
          type: 'gauge',
          alignTicks: false,
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          text: null
        },

        pane: {
          startAngle: -150,
          endAngle: 150
        },

        yAxis: [{
          min: 0,
          max: 25,
          lineColor: '#083d77',
          tickColor: '#083d77',
          minorTickColor: '#083d77',
          offset: -25,
          lineWidth: 2,
          labels: {
            distance: -20,
            rotation: 'auto'
          },
          tickLength: 5,
          minorTickLength: 5,
          endOnTick: false
        }, {
          min: 0,
          max: 40,
          tickPosition: 'outside',
          lineColor: '#f95738',
          lineWidth: 2,
          minorTickPosition: 'outside',
          tickColor: '#f95738',
          minorTickColor: '#f95738',
          tickLength: 5,
          minorTickLength: 5,
          labels: {
            distance: 12,
            rotation: 'auto'
          },
          offset: -20,
          endOnTick: false
        }],

        series: [{
          name: 'Speed',
          data: [80],
          dataLabels: {
            formatter: function () {
              var kmh = this.y,
                mph = Math.round(kmh * 0.621);
              return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
                '<span style="color:#933">' + mph + ' mph</span>';
            },
            backgroundColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, '#DDD'],
                [1, '#FFF']
              ]
            }
          },
          tooltip: {
            valueSuffix: ' km/h'
          }
        }]

      },
      // Add some life
      function (chart) {
        setInterval(function () {
          if (chart.axes) { // not destroyed
            var point = chart.series[0].points[0],
              newVal,
              inc = Math.round((Math.random() - 0.5) * 5);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 40) {
              newVal = point.y - inc;
            }

            point.update(newVal);
          }
        }, 3000);

      });
  }
}
