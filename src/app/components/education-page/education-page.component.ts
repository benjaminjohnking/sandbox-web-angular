import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/models/education.interface';
import { AppDataService } from 'src/app/services/app-data.service';
import { displayDateFormat } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.sass']
})
export class EducationPageComponent implements OnInit {
  education: IEducation[];
  displayDateFormat: string;

  constructor(appDataService: AppDataService) {
    this.education = appDataService.getEducation();
    this.displayDateFormat = displayDateFormat;
  }

  ngOnInit(): void {}
}
