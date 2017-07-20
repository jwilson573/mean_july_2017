import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit, OnChanges {
@Input() basePower;

  constructor() { }

  ngOnInit() {
  
  }
  ngOnChanges(){

    this.basePower = this.basePower * 250;
    console.log(this.basePower)
  }

}
