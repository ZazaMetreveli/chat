import { Component } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  newCom = ''

  constructor(private service: HotelService) {}

  addCom() {
    const info = {
      com: this.newCom
    }

    this.service.addAnswer(info)

  }
}
