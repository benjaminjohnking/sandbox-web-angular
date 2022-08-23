import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDataService } from './services/app-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EducationPageComponent,
    ExperiencePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
