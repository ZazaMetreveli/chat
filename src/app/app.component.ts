import { Component, inject, OnInit } from '@angular/core';
import { HotelService } from './services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    comment: string = ''

    constructor(protected service: HotelService) {

    }

    ngOnInit(): void {
    }

    com() {

      const info = {
        com: this.comment
      }

      if(this.comment.trim()) {
        this.service.addComment(info)
      } else {
        alert("ჩაწერე რამე ")
      }
    }





}
