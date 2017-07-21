import { Component } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username: string = '';
  score: any = 'temp';
  newUser: object = {};

  onSubmit(newUser){
    this._api.getUser(newUser.username)
    .then(output => {
      this.score = output.public_repos + output.followers
      console.log(output)
    
    })
    .catch(err => {console.log(err)})
  }

  constructor(private _api: APIService){

  }

}
