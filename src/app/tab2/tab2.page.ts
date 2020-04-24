import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  haloMainGames: object[] =
  [{name: "Halo: Combat Evolved", date:"2001", detail: 'src\app\tab2\Halo1.jpg'},
  {name: "Halo 2", date:"2004", detail:"1997-2011"},
  {name: "Halo 3 ", date:"2007", detail:"1990-1997"},
  {name: "Halo reach", date:"2010", detail:"1976-1990"},
  {name: "Halo 4", date:"2012", detail:"1974-1976"},
  {name: "Halo 5", date:"2015", detail:"1974-1976"},
  {name: "Halo inifinty", date:"2020", detail:"1974-1976"}];

  haloSideGames: object[] =
  [{name: "Halo ODST", date:"2009", detail:"2011-"},
  {name: "Halo Wars", date:"2009", detail:"1997-2011"},
  {name: "Halo Spartan Assault", date:"2013", detail:"1990-1997"},
  {name: "Halo Spartan Strike", date:"2015", detail:"1976-1990"},
  {name: "Halo Wars 2", date:"2017", detail:"2020"}];
}

