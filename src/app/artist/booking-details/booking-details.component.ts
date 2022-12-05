import { Component, OnInit } from '@angular/core';
import { artistHistory } from '../artist.model';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  public artistDatas: artistHistory[]
  constructor(private artistService: ArtistService) {
    this.artistDatas = [];
  }

  ngOnInit(): void {
    this.getArtistHistory();
  }

  getArtistHistory() {
    this.artistService.getArtistHistory().subscribe(data => {
      this.artistDatas = data
      console.log(this.artistDatas);

    })
  }
}
