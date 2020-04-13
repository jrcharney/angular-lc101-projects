import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    {
      url:  "https://twitter.com/JRCharney",
      text: "@JRCharney"
    },
    {
      url:  "https://www.weather.gov/lsx",
      text: "NWS St. Louis"
    },
    {
      url:  "https://earthquake.usgs.gov/earthquakes/map/",
      text: "USGS Earthquake Map"
    },
    {
      url: "https://www.newgrounds.com/",
      text: "Newgrounds.com"
    },
    {
      url: "https://jrcharney.github.io/html-me-something/eizouken/",
      text: "A4: \"Keep Your Hands Off Eizouken!\""
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
