import { Component, OnInit } from '@angular/core';
import { RequestService } from './../services/request.service';
import { responseData } from './../shared/response-data';
import { transport } from './../shared/transport';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: responseData;
  buses: transport[];
  metros: transport[];
  ships: transport[];
  trains: transport[];
  trams: transport[];
  constructor(public requestService: RequestService) { }

  ngOnInit(): void {
  }

  getTransport(){
    this.requestService.getRealTimeDepartures().subscribe(
      (data: any) => {
        this.data = data.ResponseData;
        this.buses = this.data.Buses;
        this.metros = this.data.Metros;
        this.ships = this.data.Ships;
        this.trains = this.data.Trains;
        this.trams = this.data.Trams;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
