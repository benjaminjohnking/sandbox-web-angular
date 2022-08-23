import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/models/profile.interface';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  profile: IProfile

  constructor(appDataService: AppDataService) {
    this.profile = appDataService.getProfile();
  }

  ngOnInit(): void {}
}
