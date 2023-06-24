import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  c = "";
  f = "";

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  valueChanged(value:String| null  , type:"c" | "f"){
    if (value === null){
      this.c = "";
      this.f = "";
      return
    }

    const temp = Number (value);
    if (type === "c") {
      this.f = ((temp * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temp - 32) * 5) / 9).toFixed(1);
    }
  }

}
