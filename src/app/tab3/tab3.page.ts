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
  hide() {
    hideMe.text = "hide";
  }

  show() {
    let hideMe = true;
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
   {line: "Thel' Vadamee better known as his Arbiter is a Sangheili. He was supreme commander and led the fleet of Particular Justice, particularly during the Battle of Reach and the Battle of Settlement 04, before being condemned by the Covenant High Council for incompetence and lack of faith. He received themark of shame, and became the eighteenth Arbiter to die in honor for Covenant. He nevertheless revealed the lies of the Prophets and led the Covenant separatists during the Great Schism. He then fought alongside humans to destroy the Alliance and the Parasite."}];

  truth: object[] =
  [{line: " ‎San'Shyuum"},
   {line: "The High Prophet of Truth is the leader of the three Prophet Hierarchs that led the Covenant High Council during the Ninth Age of Reclamation and one of the main instigators of the war against humanity. In 2552, he plotted the ousting of the Sangheili from the Covenant, and replaced them with the Jiralhanae after the death of the High Prophet of Regret on Installation 05. After the demise of the High Prophet of Mercy on High Charity, he became the leader of the Covenant."}];
  
  gravemind: object[] =
  [{line: "Flood"},
   {line: "The Gravemind seems to the hive mind of the flood. Although not much is known about it, it has knowledge that dates billions of years. It also only speaks in rhyme."}];
   
  atroix: object[] =
  [{line: "Jiralhanae"},
   {line: "Atriox is the powerful Jiralhanae warmaster who leads the Banished. He originally fought on behalf of the Covenant, but was banished after thwarting his own execution. A deadly warrior and brilliant military leader, Atriox inspired many others to join him in exile"}];
}
