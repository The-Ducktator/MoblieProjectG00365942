import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  users;
 
  constructor(private apiService: ApiService, private localStorage: LocalStorageService) {}
 //Get json data form an exteral website
  ngOnInit() {
    this.apiService.getData().subscribe((data)=>{
      //console.log(data);
      this.users = data;
    });
   
 
  }
  //Creates an object array for main games with name, release date
  haloMainGames: object[] =
  [{name: "Halo: Combat Evolved", date:"2001"},
  {name: "Halo 2", date:"2004"},
  {name: "Halo 3 ", date:"2007"},
  {name: "Halo reach", date:"2010"},
  {name: "Halo 4", date:"2012"},
  {name: "Halo 5", date:"2015"},
  {name: "Halo inifinty", date:"2020"}];
//Creates an object array for side games with name, release date
  haloSideGames: object[] =
  [{name: "Halo ODST", date:"2009"},
  {name: "Halo Wars", date:"2009"},
  {name: "Halo Spartan Assault", date:"2013" },
  {name: "Halo Spartan Strike", date:"2015" },
  {name: "Halo Wars 2", date:"2017"}];
}

