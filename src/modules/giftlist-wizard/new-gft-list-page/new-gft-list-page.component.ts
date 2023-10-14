import { Component } from '@angular/core';

@Component({
  selector: 'app-new-gft-list-page',
  templateUrl: './new-gft-list-page.component.html',
  styleUrls: ['./new-gft-list-page.component.scss']
})
export class NewGftListPageComponent {
  events: any[];
  value: any;
  types: any[];

  constructor() {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg'
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7'
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800'
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B'
      }
    ];

    this.types = [
      { name: 'Chrismas', code: 'NY' },
      { name: 'Birthday', code: 'RM' },
      { name: 'Mariage', code: 'LDN' },
      { name: 'Birth', code: 'IST' }
    ];
  }
}
