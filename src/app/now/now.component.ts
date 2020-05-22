import { Component, OnInit,Input } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {
	city:string;

  constructor(private meteoService : MeteoService, private route: ActivatedRoute) { }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];
    this.city = this.meteoService.getAppareilById(+id).city;
  }

}
