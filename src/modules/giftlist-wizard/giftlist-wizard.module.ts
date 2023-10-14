import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGftListPageComponent } from './new-gft-list-page/new-gft-list-page.component';
import { RouterModule } from '@angular/router';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [NewGftListPageComponent],
  imports: [
    CommonModule,
    TimelineModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewGftListPageComponent
      }
    ]),
    ButtonModule,
    RippleModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule
  ]
})
export class GiftlistWizardModule {}
