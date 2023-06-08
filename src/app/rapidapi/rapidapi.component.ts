import { Component, OnInit } from "@angular/core";
import { RapidapiService } from "../services/rapidapi.service";

@Component({
  selector: "app-rapidapi",
  templateUrl: "./rapidapi.component.html",
  styleUrls: ["./rapidapi.component.css"],
})
export class RapidapiComponent implements OnInit {

  news = [];
  quotes = [];
  matches = [];
  matchInfo;
  matcheType;

  // Inject the rapid api service
  constructor(private rapidApiService: RapidapiService) {}

 
  ngOnInit() {
    this.rapidApiService.getDataYahooFinance().subscribe((res) => {
      this.news = res.news;
      // console.log('news Array: --> ',this.news);
      this.quotes = res.quotes;
      // console.log('quotes Array: --> ',this.quotes);
      // console.log('getting data from rapid API ', res);
    });

    this.rapidApiService.getCricBuzData().subscribe(res => {
      console.log('CrickBuzz Data', res);
      this.matches = res.typeMatches.seriesMatches
       console.log('CrickBuzz Matches', this.matches);
    })

    // this.rapidApiService.getCricBuzData().subscribe(res => {
    //   for(let val of res.typeMatches)
    //   {
    //     for(let match of val.seriesMatches) {
    //       if(match.seriesAdWrapper != undefined) {
    //         for(let matchinfo of match.seriesAdWrapper.matches)
    //   {
    //     console.log('from crickbuzz', matchinfo.matchInfo);
    //     this.matchInfo = matchinfo.matchInfo;
    //           }
    //        }
    //     }
    //   }
    // })

    // this.rapidApiService.getCricBuzData().subscribe((res: any) => {
    //    console.log("getting data from getCricBuzData API ", res);
    //    this.matches = res.typeMatches;
    //    console.log('TypeMatches', this.matches);
    //   this.matcheType = res.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches;
    //   console.log('MatcheType', this.matcheType);
    //   this.matchInfo = res.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches.matchInfo;
    //   console.log('matchInfo', this.matchInfo);
    // });
  }
}
