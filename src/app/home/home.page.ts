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
  ngOnInit() {
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.username = val;
    });
  }
  getDataHome () {
    this.localStorage.getData(this.username);
  }

  setDataHome () {
    console.log ( this.username);
    this.localStorage.setData(this.username);
  }


}
