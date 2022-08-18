import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation as geocap } from '@capacitor/geolocation';
import { ModalPage } from '../components/modal/modal.page';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { UserDirectionsService } from '../services/user-directions.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ResumeModalPage } from '../components/resume-modal/resume-modal.page';


declare var google;

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})


export class HomeUserPage implements OnInit {

  map = null;
  modalHasCreated = false;
  myLatLng = { lat: -36.795331, lng: -73.0647615 };
  iconBase = 'https://cittduocfestival.s3.sa-east-1.amazonaws.com/icons/'
  geocoder = new google.maps.Geocoder();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  parkings = {
    "santa Isabel": [-36.79021021205744, -73.06091049727428, 690],
    "Mall Plaza": [-36.79152183471218, -73.06566337693754, 5120]
  }
 



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

    for (const [placeName, location] of Object.entries(this.parkings)){

    let marker = new google.maps.Marker({
      position: {lat: location[0], lng:location[1]},
      map: this.map,
      icon: {
        url: this.iconBase + 'car.png',
        scaledSize: new google.maps.Size(32, 32)
      }
      
    })

    } 
  }
  

  
  calcRoute(directionsData) {
    this.directionsRenderer.setMap(this.map);
    var request = {
      origin: directionsData['originInput'],
      destination: directionsData['destinyInput'],
      travelMode: 'DRIVING'
    };
    this.directionsService.route(request, async (result, status) => {
      if (status == 'OK') {
        this.directionsRenderer.setDirections(result);
        
      
          const modal = await this.modalController.create({
            component: ResumeModalPage,
            cssClass: 'parkinModalStyle',
            // componentProps: {parkingName: placeName, 
            //                  coords: marker.getPosition() as google.maps.LatLng,
            //                  price: location[2] 
            //                 },
            swipeToClose: true,
            presentingElement: await this.modalController.getTop()
          });
          return await modal.present();   
 
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
