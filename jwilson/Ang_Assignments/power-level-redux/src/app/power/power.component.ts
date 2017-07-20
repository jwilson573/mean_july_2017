import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  basePower: number = 1;

  constructor() { }

  ngOnInit() {
    console.log(this.basePower)
    this.basePower = this.basePower * 1;
  }
}
