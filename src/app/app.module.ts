import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileCardComponent } from './componentes/profile-card/profile-card.component';
import { AboutCardComponent } from './componentes/about-card/about-card.component';
import { ExperienceEducationCardComponent } from './componentes/experience-education-card/experience-education-card.component';
import { HardSoftSkillsCardComponent } from './componentes/hard-soft-skills-card/hard-soft-skills-card.component';
import { ProjectsCardComponent } from './componentes/projects-card/projects-card.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileCardComponent,
    AboutCardComponent,
    ExperienceEducationCardComponent,
    HardSoftSkillsCardComponent,
    ProjectsCardComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
