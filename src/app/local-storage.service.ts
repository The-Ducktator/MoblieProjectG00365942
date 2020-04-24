import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) { }
  getData (value: String ) {
    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
        console.log('Your name is', val);
        value = val;
      });
  }
  setData (value: String) {
    console.log (value);
    this.storage.set('name', value);
  }
}
