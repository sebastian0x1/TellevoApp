import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet , ModalController } from '@ionic/angular';
import { ModalPage as modalpagge } from './modal.page';
import { UserDirectionsService } from '../../services/user-directions.service';
import { Data } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  
  @ViewChild('origin') originInput;
  @ViewChild('destiny') destinyInput;
  selectedInput: HTMLInputElement = null;

   
  
  constructor( public directionsService: UserDirectionsService ){
             
    } 
    

    
  initService(e): void {



    const displaySuggestions =  (
      predictions: google.maps.places.QueryAutocompletePrediction[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
        return;
      }
      let list = document.getElementById('list-prediction') as HTMLElement
      list.innerHTML = ''

      predictions.forEach((prediction) => {
        let item = document.createElement('ion-item')
        item.addEventListener('click', (e) => {
          this.setPrediction(e)
        })
        item.classList.add('item')
        item.innerHTML = prediction.description
        list.insertAdjacentElement('beforeend', item)
      });

    };

    //Input selected 
  
    const service = new google.maps.places.AutocompleteService();
    service.getQueryPredictions({ input: e.target.value }, displaySuggestions);


  }


  
  setPrediction = (e) => {
    this.selectedInput.value = e.target.outerText
    if(this.originInput.value && this.destinyInput.value){
      console.log(this.originInput)
      console.log(this.destinyInput)

      this.directionsService.triggerLocations.emit({"originInput": this.originInput.value, "destinyInput": this.destinyInput.value})
    }
    
  }

  




  setInput(e) {
    if(e.target.name === "origin"){
      this.selectedInput = this.originInput
    }

    else if (e.target.name === "destiny"){
      this.selectedInput = this.destinyInput
    }

  }
  


}

