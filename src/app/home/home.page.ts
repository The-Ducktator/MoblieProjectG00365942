import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  username : string ;
  constructor(private localStorage: LocalStorageService, private storage: Storage) { }
 //Prints the local storage value(name) out on the webpage
  ngOnInit() {
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.username = val;
    });
  }
  //Get the local storage
  getDataHome () {
    this.localStorage.getData(this.username);
  }
//Takes in a string to set as local storage
  setDataHome () {
    console.log ( this.username);
    this.localStorage.setData(this.username);
  }


}
