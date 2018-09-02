import { Component, OnInit,Input } from '@angular/core';
import { City } from '../class/city';
import {WeatherService} from '../weather.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  @Input()
  private data: City;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

  private removeCity(): void {
    this.weatherService.removeCity(this.data.id);
  }
}
