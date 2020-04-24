import { Component, OnInit  } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


@Injectable()
export class Tab3Page  implements OnInit{
  jsonHeader;
  json;
 
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getData().subscribe((data)=>{
      //console.log(data);
      this.json = data;
    });
    this.apiService.getHeader().subscribe((data)=>{
      console.log(data);
      this.jsonHeader = data;
    });
  }

  cheif: object[] =
  [{line: "Human"},
   {line: "Petty Officer John-117 or Master Chief for short is the main hero of the Halo franchise. As a genetically-modified SPARTAN II super-soldier, the Master Chief is basically a walking tank. Unfortunately, he's also one of the last of his kind, as most of the other SPARTANs were wiped out."}];
  
   cortana: object[] =
  [{line: "Ai"},
   {line: "The Master Chief is powerful on his own, but he's even more lethal once Cortana is at his side. The artificial intelligence is basically the Chief's co-pilot, and Cortana is one of the most advanced pieces of technology that humanity has ever created. In fact, she's one of the main reasons that the Master Chief is still alive today."}
  ];
  
  arbiter: object[] =
  [{line: "Sangheili"},
   {line: ""}];
  
  johnson: object[] =
   [{line: "Human"},
    {line: ""}];

  truth: object[] =
  [{line: "Human"},
   {line: ""}];
  
  gravemind: object[] =
  [{line: "Human"},
   {line: ""}];
   
  atroix: object[] =
  [{line: "Human"},
   {line: ""}];
}
