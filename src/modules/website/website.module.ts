import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroSectionComponent,
    AboutSectionComponent
  ],
  imports: [CommonModule, WebsiteRoutingModule]
})
export class WebsiteModule {}
