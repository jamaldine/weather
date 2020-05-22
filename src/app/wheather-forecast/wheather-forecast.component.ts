import { Component, OnInit, Input } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wheather-forecast',
  templateUrl: './wheather-forecast.component.html',
  styleUrls: ['./wheather-forecast.component.scss']
})
export class WheatherForecastComponent implements OnInit {

lastUpdate = new Date();
city:string;
api_weathers:any[];
  constructor(private meteoService : MeteoService, private route: ActivatedRoute) { }
  ngOnInit() {
  	const id = this.route.snapshot.params['id'];
  	this.api_weathers=this.meteoService.api_weathers;
  	this.city = this.meteoService.getAppareilById(+id).city;
  }
}