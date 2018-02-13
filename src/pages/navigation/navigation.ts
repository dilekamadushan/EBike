import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

declare var google;

@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})

export class NavigationPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.readData();
    let bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(this.map);
  }

  readData(){
    this.http.get('../../assets/mapStyle.json').map(res => res.json()).subscribe(data => {
      this.initMap(data);
    });
  }

  initMap(mapStyle) {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: {lat: 7.8731, lng: 80.7718},
      disableDefaultUI: true,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      styles: mapStyle
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if ('OK' === status) {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
