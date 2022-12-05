import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /**
   *  @author : Ayush Dhimmar
   */
  @Input() data: any;

  constructor(private router: Router) {

  }

  /**
   *  @author : Ayush Dhimmar
   */
  ngOnInit(): void {
  }

  /** 
     * @author : Charvi Sarang
     * setting routing of studio & artist by Id
     */
  onViewDescription(item: number, id: number) {
    if (id == 1) {
      this.router.navigate(["studio/studio-description", item]);
    }
    else if (id == 2) {
      this.router.navigate(["artist/artist-description", item]);
    }
  }
}
