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
  public artistFiveData: any = []

  public carosuelFourImage: any = []
  public studioTwoImage: any = []
  public artistTwoImage: any = []
  public studioFiveData: any = []

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig, private carouselService: CarouselService) {// customize default values of carousels used by this component tree
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.CarouselData();
    this.artistData();
    this.studioData();
  }


  CarouselData() {
    this.carouselService.getStudioImage().subscribe(res => {
      this.studioTwoImage  = res.slice(-2).reverse();

      this.carouselService.getArtistImage().subscribe(res => {
        // get last-two ArtistData from Database
        this.artistTwoImage = res.slice(-2).reverse();
        // this.artistAllData = res.slice((res.length - 2), res.length).reverse();

        // this.lastArtistImage = this.artistAllData.slice((this.artistAllData.length - 2), this.artistAllData.length).reverse();

        // merge twoArray to show Both Data

        this.mergeImage = (this.studioTwoImage.concat(this.artistTwoImage));
      })

    })
  }
  artistData() {
    this.carouselService.getArtistImage().subscribe(res => {
      this.artistFiveData = res.slice(-6).reverse();
      // this.lastFiveData = this.artisFiveData.slice(-5).reverse()
      // this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()
    })
    // console.log(this.carouselAllData['img']);
  }

  studioData() {
    this.carouselService.getArtistImage().subscribe(res => {
      this.studioFiveData = res.slice(-6).reverse();
    })
  }


}
