import { Component, OnInit, Input } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Input() id: number;
  @Input() city: string;
  @Input() indexHome:string;

	/*lastUpdate = new Date();
	d=this.lastUpdate.getDay();*/

  weathers:any[];
  constructor(private meteoService : MeteoService){

  }
  ngOnInit(){
    this.weathers = this.meteoService.api_weathers;
  }
  
}
