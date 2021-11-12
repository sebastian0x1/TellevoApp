import { EventEmitter, Injectable, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserDirectionsService {
   
  @Output() triggerLocations: EventEmitter<any> = new EventEmitter();
  origin: string = ''
  destiny: string = '' 
  constructor() { }

  
}
