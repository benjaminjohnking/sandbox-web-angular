import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/models/experience.interface';
import { AppDataService } from 'src/app/services/app-data.service';
import { displayDateFormat } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.sass']
})
export class ExperiencePageComponent implements OnInit {
  experience: IExperience[];
  displayDateFormat: string;

  constructor(appDataService: AppDataService) {
    this.experience = appDataService.getExperience();
    this.displayDateFormat = displayDateFormat;
  }

  ngOnInit(): void {}
}
