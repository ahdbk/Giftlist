import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartGiftListPageComponent } from './start-gift-list-page/start-gift-list-page.component';
import { RouterModule } from '@angular/router';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { GiftListPageComponent } from './gift-list-page/gift-list-page.component';
import { GiftListHeaderComponent } from './components/gift-list-header/gift-list-header.component';
import { GiftListFooterComponent } from './components/gift-list-footer/gift-list-footer.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import {APP_ROUTES} from "../../config/routes.config";

@NgModule({
  declarations: [StartGiftListPageComponent, GiftListPageComponent, GiftListHeaderComponent, GiftListFooterComponent, GiftListComponent],
  imports: [
    CommonModule,
    TimelineModule,
    RouterModule.forChild([
      { path: '', component: StartGiftListPageComponent },

      {
        path: APP_ROUTES.GIFTLIST.START,
        component: StartGiftListPageComponent
      },
      {
        path: APP_ROUTES.GIFTLIST.EDIT,
        component: GiftListPageComponent
      }
    ]),
    ButtonModule,
    RippleModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule
  ]
})
export class GiftlistModule {}
