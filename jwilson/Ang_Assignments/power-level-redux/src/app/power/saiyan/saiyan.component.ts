import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit, OnChanges {
@Input() basePower;

  constructor() { }

  ngOnInit() {
     
  }

  ngOnChanges(){
    
    this.basePower = this.basePower * 10;
  }

}
