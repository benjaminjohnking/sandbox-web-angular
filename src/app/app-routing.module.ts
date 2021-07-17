import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
