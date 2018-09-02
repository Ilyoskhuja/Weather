import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { City } from './class/city';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey = '2f820f383f0be7bd2e6af57ab08a5b22';

  url: any;
  urlWithCor: any;
  
  private nextId: number;



  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    this.urlWithCor = 'http://api.openweathermap.org/data/2.5/forecast?lat=';

    let datas = this.getCities();

    if (datas.length == 0) {

      this.nextId = 0;

    }
    else {
      let maxId = datas[datas.length - 1].id;
      this.nextId = maxId + 1;
    }

  }

  public addCity(text: string): void {

    let value = new City(this.nextId, text);

    let city = this.getCities();

    city.push(value);

    this.setLocalStorageData(city);

    this.nextId++;
  }

  public getCities(): City[] {

    let localStorageItem = JSON.parse(localStorage.getItem('cities'));

    return localStorageItem == null ? [] : localStorageItem.data;
  }

  private setLocalStorageData(data: City[]): void {

    localStorage.setItem('cities', JSON.stringify({ data: data }));

  }

  public removeCity(id: number): void {

    let datas = this.getCities();

    datas = datas.filter((value) => value.id != id);

    this.setLocalStorageData(datas);
  }

  getWeather(city) {

    return this.http.get(this.url + city + '&APPID=' + this.apiKey).pipe(map(res => res.json()));

  }
  getWeatherWithCor(lat, long) {

    return this.http.get(this.urlWithCor + lat + '&lon=' + long + '&APPID=' + this.apiKey).pipe(map(res => res.json()));
  }


}

