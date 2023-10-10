import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ButtonModule } from 'primeng/button';
import { WebsiteHeaderComponent } from './components/website-header/website-header.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { RippleModule } from 'primeng/ripple';
import { WebsiteLayoutComponent } from './website-layout/website-layout.component';
import { WebsiteFooterComponent } from './components/website-footer/website-footer.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    PrivacyPageComponent,
    ContactPageComponent,
    TermsPageComponent,
    WebsiteHeaderComponent,
    WebsiteFooterComponent,
    WebsiteLayoutComponent
  ],
  imports: [CommonModule, WebsiteRoutingModule, ButtonModule, RippleModule]
})
export class WebsiteModule {}
