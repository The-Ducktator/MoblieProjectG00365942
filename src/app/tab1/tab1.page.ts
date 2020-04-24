import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
@Injectable()
export class Tab1Page {
  constructor(private storage: Storage) { }
  getData () {
    this.storage.set('name', 'Max');
    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  
  }
  
  

  

}
