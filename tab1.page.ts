import { Component } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  presidents: object[] =
  [{name: "Higgins", term:"2011-"},
  {name: "McAleese", term:"1997-2011"},
  {name: "Robinson", term:"1990-1997"},
  {name: "Hillery", term:"1976-1990"},
  {name: "O Dalaigh", term:"1974-1976"}];

}
