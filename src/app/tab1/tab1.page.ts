import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
@Injectable()
export class Tab1Page {

  factoin: object[] =
  [{name: "UNSC"}, {races: "Races: Humans"}, {info: "The United Nations Space Command is the governing body of the Halo universe. Following the wars of present-day Earth, the UN reforms into the UNSC once extraterrestrial human colonies are established. The military makes up only a small part of the organization, though it's the most explored branch within the Halo lore."}, {line: "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"},
  {name: "COVENANT"}, {races: "Races: San'Shyuum, Sangheili, Jiralhanae, Unggoy, Kig-Yar, Yanme'e, Lekgolo, Huragok"}, {info: "A conglomerate of alien species bent on humanity's destruction, the armies of the Covenant are almost unstoppable. Powered by ancient alien technology and fanatical religious beliefs, the Covenant believe it is their duty to wipe out humanity  and without the help of the Master Chief, they probably would have succeeded."}, {line: "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"},
  {name: "FLOOD"}, {races: "Races: Flood"}, {info: "There is only one threat to humanity greater than that of the Covenant, and it is called the Flood. The parasitic species kills and rewrites its host's DNA upon infection, then uses its new form to spread the infection further. While the Flood's combat forms are similar to zombies, they're also faster, stronger and deadlier than any shambler ever could be."},{line: "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"},
  {name: "FORERUNNERS"}, {races: "Races: Forerunners"}, {info: "For a long, long time, little was known about the Forerunners. They were an ancient, galaxy-spanning empire with access to technology beyond humanity's wildest imaginiation until they disappeared from the galaxy without a trace. All that remains are ancient relics and long-forgotten weapons from another age ..."},{line: "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"},
  {name: "BANISHED"}, {races: "Races: Jiralhanae, Lekgolo, Unggoy, Kig-Yar, Huragok, Sangheili, Humans"}, {info: "The Banished are a mercenary organization and splinter faction that rebelled against the Covenant Empire and rose to power after the conclusion of the Human-Covenant War. The Banished were formed by Atriox and several Jiralhanae loyal to him who rebelled against their Sangheili masters during the Human-Covenant War. For a decade, the Banished were little more than raiders and pirates, conducting surgical raids against the Covenant and other targets while gathering mercenaries to their cause. Unimpeded by the Covenant's devastating Great Schism, the Banished managed to salvage many of the empire's former assets after its fall, becoming a formidable power in their own right. While Atriox had already recruited many allies during the Covenant War, the Banished gained many new members in the war's aftermath from former Covenant who wished to continue living as warriors, including human criminals who were influenced by the Banished and may have joined."}, {line: "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"},
];

  constructor(private storage: LocalStorageService) { }
  username : string = "This is the start";
  getDataTab1 () {
    this.storage.getData(this.username)
  };

}
