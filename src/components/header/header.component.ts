import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../app/routes.config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get contact() {
    return APP_ROUTES.WEBSITE.CONTACT;
  }
}
