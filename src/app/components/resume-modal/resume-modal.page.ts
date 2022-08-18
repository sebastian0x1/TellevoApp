import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-parking-modal',
  templateUrl: './resume-modal.page.html',
  styleUrls: ['./resume-modal.page.scss'],
})
export class ResumeModalPage implements OnInit {
  parkingName;
  coords;
  geocoder = new google.maps.Geocoder();
  parkLocation: string;
  price;
  constructor() { }

  ngOnInit() {
    this.reverseGeocoder()
    console.log(this.parkLocation)
  }


  
  
  
  reverseGeocoder = async () => {
    const pos = this.coords;
    this.geocoder.geocode({ location: pos }).then((response) => {
      if (response.results[0]) {
         this.parkLocation = response.results[0].formatted_address
         

      } else {
        console.log("No results found");
      }
    }).catch((e) => {
      console.log(e);
    })
  }

}
