import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation as geocap } from '@capacitor/geolocation';
import { ModalPage } from '../components/modal/modal.page';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { UserDirectionsService } from '../services/user-directions.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
declare var google;

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})


export class HomeUserPage implements OnInit {

  map = null;
  myLatLng = { lat: -36.795331, lng: -73.0647615 };
  iconBase = 'https://cittduocfestival.s3.sa-east-1.amazonaws.com/icons/'
  geocoder = new google.maps.Geocoder();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
 



  constructor(public modalController: ModalController, 
              public directionService : UserDirectionsService ) {

  }

  ngOnInit() {
    this.getLocation();
    this.loadMap();
    this.creteGeoMarker();

    this.directionService.triggerLocations.subscribe(data => { 
       this.modalController.dismiss();
       this.calcRoute(data);
    })



    


  }



  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modalStyle',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
    });
    return await modal.present(); 
  }



  getLocation = async () => {
    const coordinates = await geocap.getCurrentPosition();

    const pos = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    this.map.setCenter(pos);
  }


  creteGeoMarker = async () => {
    const coordinates = await geocap.getCurrentPosition();
    const pos = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    let marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: {
        url: this.iconBase + 'red+circle.png',
        scaledSize: new google.maps.Size(32, 32)
      }
    })


    // var circle = new google.maps.Circle({
    // 	radius: 20, 
    // 	center: marker.getPosition(),
    // 	map: this.map,
    // 	fillColor: '#FF0000',
    // 	fillOpacity: 0.2,
    // 	strokeColor: '#FF0000',
    // 	strokeOpacity: 0.6
    //     }); 
  }
  

  
  calcRoute(directionsData) {
    this.directionsRenderer.setMap(this.map);
    var request = {
      origin: directionsData['originInput'],
      destination: directionsData['destinyInput'],
      travelMode: 'DRIVING'
    };
    this.directionsService.route(request, (result, status) => {
      console.log(request)
      if (status == 'OK') {
        this.directionsRenderer.setDirections(result);
      }
    });
  }







  reverseGeocoder = async () => {
    const coordinates = await geocap.getCurrentPosition();
    const pos = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    this.geocoder.geocode({ location: pos }).then((response) => {
      if (response.results[0]) {
        const searchbarOrigin = document.querySelector('ion-searchbar');
        searchbarOrigin.value = response.results[0].formatted_address


      } else {
        console.log("No results found");
      }
    }).catch((e) => {
      console.log(e);
    })
  }




  loadMap() {
    //  create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object

    // create map
    this.map = new google.maps.Map(mapEle, {
      mapId: 'd5ca862567d06a43',
      center: this.myLatLng,
      zoom: 16,
      disableDefaultUI: true
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {

    });
  }



}
