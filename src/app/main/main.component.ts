import { Component, OnInit } from '@angular/core';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(requestService:RequestService) { }

  ngOnInit(): void {
  }

  getTransport(){

  }
}
