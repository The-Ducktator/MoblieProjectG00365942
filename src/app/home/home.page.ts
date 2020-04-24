import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  username : string ;
  constructor(private localStorage: LocalStorageService) { }
  ngOnInit() {
    this.localStorage.getData(this.username);
  }
  getDataHome () {
    this.localStorage.getData(this.username);
  }

  setDataHome () {
    console.log ( this.username);
    this.localStorage.setData(this.username);
  }


}
