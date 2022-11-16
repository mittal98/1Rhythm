import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from './carousel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lastArtistImage: any = []
  public mergeImage: any = []
  public artistAllData: any = []
  public lastFiveData: any = []
  public artisFiveData: any = []
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig, private carouselService: CarouselService) {// customize default values of carousels used by this component tree
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.artistData();

  }


  artistData() {
    this.carouselService.getArtistImage().subscribe(res => {
      this.artisFiveData = res;
      this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()
    })
  }

  // public getArtistFiveImage(event: any) {
  //   this.lastFiveData = event.slice(-5);

  // }


}
