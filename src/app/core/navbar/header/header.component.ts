import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userDataId: any;
  public userData: any;
  public roleType: any;
  public showArtist: boolean;
  public showStudio: boolean;




  constructor(private userService: UserService, private router: ActivatedRoute) {
    this.showArtist = false;
    this.showStudio = false;

  }

  ngOnInit(): void {
    this.roleType = localStorage.getItem("RoleType");
    this.showArtistAndStudio();

    /**
     * @author : Nikunj Patel
     */
    this.userDataId = localStorage.getItem("userId");
    console.log(this.userDataId);
    this.getProfileData();

  }

  /**
   * to Get the profile picture of the particular user
   * @author : Nikunj Patel
   */

  getProfileData() {
    console.log(this.userDataId);
    this.userService.getDataById(this.userDataId).subscribe(res => {
      this.userData = res
      console.log(this.userData);
    })
  }

  /** 
  /**
 * @author : Ayush Dhimmar
   * show and hide studio and artist functionality according to roleType
   * */
  showArtistAndStudio() {
    if (this.roleType == "Studio Owner") {
      this.showArtist = true;
    }

    else if (this.roleType == "Artist") {
      this.showStudio = true;
    }

    else if (this.roleType == "General User") {
      this.showArtist = true;
      this.showStudio = true
    }
  }

}
