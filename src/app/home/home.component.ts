import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  city: string;

  f: boolean;

  weather: any;

  cityFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnChanges() {

  }

  constructor(private _weatherService: WeatherService) {
    this.f = false;
  }

  ngOnInit() {


    if (window.navigator.geolocation) {

      window.navigator.geolocation.getCurrentPosition(position => {

        this._weatherService.getWeatherWithCor(position.coords.latitude, position.coords.longitude)

          .subscribe(response => {

            this.weather = response;

          });

      },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };
  }

  onSubmit() {
  }

  saveForm() {

    this._weatherService.getWeather(this.city).subscribe(
      response => {

        this.weather = response;

      }
    );

    this.f = false;
    let g = this._weatherService.getCities();

    for (let i = 0; i < g.length; i++) {

      if (g[i].name == this.city) {

        this.f = true;

      }
    }

    if (this.f == false)
      this._weatherService.addCity(this.city);
  }
}
