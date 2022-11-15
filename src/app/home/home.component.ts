import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from './carousel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public carouselAllData: any = []
  public lastTwoImage: any = []
  public lastArtistImage: any = []
  public mergeImage: any = []
  public artistAllData: any = []
  public lastFiveData: any = []
  public artistFiveData: any = []

  constructor(config: NgbCarouselConfig,
    private carouselService: CarouselService) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.artistData();
    
  }
  

  artistData() {
    this.carouselService.getArtistData().subscribe(res => {
      this.artistFiveData = res;
      this.lastFiveData = this.artistFiveData.slice((this.artistFiveData.length - 5), this.artistFiveData.length).reverse()
    })
    console.log(this.carouselAllData['img']);
    
  }
}
