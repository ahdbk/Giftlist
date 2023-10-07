import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroSectionComponent,
    AboutSectionComponent
  ],
  imports: [CommonModule, WebsiteRoutingModule, ButtonModule, HeaderComponent]
})
export class WebsiteModule {}
