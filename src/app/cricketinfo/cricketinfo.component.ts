import { Component, OnInit } from '@angular/core';
import { CricketinfoService } from '../services/cricketinfo.service';

@Component({
  selector: 'app-cricketinfo',
  templateUrl: './cricketinfo.component.html',
  styleUrls: ['./cricketinfo.component.css']
})
export class CricketinfoComponent implements OnInit {

  counter=1; 
  venue;
  imageUrl;
  matchInfo;
  team1;
  team2;
  playerDetails1;
  playerDetails2;
  constructor(private cricketService: CricketinfoService) { }

  ngOnInit() {
    //  this.getData();
    this.cricketService.getInfo().subscribe( (res:any) => {
      console.log('getting data from rapid API ', res);

       // console.log(res);
       this.venue = res.venueInfo;
       console.log('venue', this.venue);
       this.matchInfo = res.matchInfo;
       this.team1 = this.matchInfo.team1;
       console.log("Team 1", this.team1);
       this.team2 = this.matchInfo.team2;
       console.log("Team 2", this.team2);
       this.playerDetails1 = this.team1.playerDetails;
       console.log("playerDetails 1", this.playerDetails1);
       this.playerDetails2 = this.team2.playerDetails;
       console.log("playerDetails 2", this.playerDetails2);


    })
}

}