import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../components/header/header.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    PrivacyPageComponent,
    ContactPageComponent,
    TermsPageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ButtonModule,
    HeaderComponent,
    RippleModule
  ]
})
export class WebsiteModule {}
