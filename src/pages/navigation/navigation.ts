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
    this.http.get('assets/mapStyle.json').map(res => res.json()).subscribe(data => {
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
      styles: mapStyle,
      gestureHandling: 'greedy'
    });

    // take location from the browser
    if (navigator.geolocation) {
      console.log("Device supports Geolocation");
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = new google.maps.LatLng(position.coords.latitude,
          position.coords.longitude);
      });
    } else {
      // Device doesn't support Geolocation
      console.log("Device doesn't support Geolocation");
    }

    let centerControlDiv = document.createElement('div');
    let centerControlFun = new this.centerControl(centerControlDiv, this.map);

    this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);

    this.directionsDisplay.setMap(this.map);
  }

  // custom locate controller
  centerControl(controlDiv, map) {

    // Set CSS for the control border.
    let controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    let controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Locate Me';
    controlUI.appendChild(controlText);

    controlUI.addEventListener('click', function() {
      console.log("controller listerner");
      if (navigator.geolocation) {
        console.log("Device supports Geolocation");
        navigator.geolocation.getCurrentPosition(function(position) {
          let pos = new google.maps.LatLng(position.coords.latitude,
            position.coords.longitude);
          map.setCenter(pos);
          map.setZoom(15);
        });
      } else {
        // Device doesn't support Geolocation
        console.log("Device doesn't support Geolocation");
      }
    });

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
