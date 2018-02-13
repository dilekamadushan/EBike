import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as HighCharts from 'highcharts';
import * as HighChartsMore from 'highcharts/highcharts-more';

HighChartsMore(HighCharts);

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    HighCharts.chart('distance-history', {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Distance Travelled'
        },
        subtitle: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          labels: {
            overflow: 'justify'
          }
        },
        yAxis: {
          title: {
            text: 'Distance (KM)'
          },
          minorGridLineWidth: 0,
          gridLineWidth: 0,
          alternateGridColor: null,
          plotBands: [{ // Light air
            from: 0.0,
            to: 0.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
              text: null,
              style: {
                color: '#606060'
              }
            }
          }, { // Light breeze
            from: 0.5,
            to: 5.0,
            color: 'rgba(0, 0, 0, 0)',
            label: {
              text: 'Good',
              style: {
                color: '#606060'
              }
            }
          }, { // Gentle breeze
            from: 5.0,
            to: 15.0,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
              text: 'Excellent',
              style: {
                color: '#606060'
              }
            }
          }]
        },
        tooltip: {
          valueSuffix: ' m/s'
        },
        plotOptions: {
          spline: {
            lineWidth: 4,
            states: {
              hover: {
                lineWidth: 5
              }
            },
            marker: {
              enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
          }
        },
        series: [{
          name: 'Hestavollane',
          data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

        }],
        navigation: {
          menuItemStyle: {
            fontSize: '10px'
          }
        }
      }
    );
  }
}
