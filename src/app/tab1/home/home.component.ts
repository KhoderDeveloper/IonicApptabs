import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public appPages = [
    { title: 'Favorites', url: '', icon: 'home' ,open: false , subPages: [
      { title: 'Tracking', url: '/tms/tracking', icon: 'airplane' }
    ] },
    { title: 'TMS', url: '', icon: '' ,open: false , subPages: [
      { title: 'Tracking', url: '/tms/tracking', icon: 'airplane' }
    ] },
    { title: 'OS+D', url: '', icon: '' ,open: false , subPages: [
      { title: 'Request Tracker', url: '/folder/inbox', icon: 'call' }
    ] },
    { title: 'WMS', url: '', icon: '' ,open: false, subPages: [
      { title: 'Request Tracker', url: '/folder/favorites', icon: 'call' }
    ] },
    { title: 'Support', url: '', icon: '' , open: false, subPages: [
      { title: 'Request Tracker', url: '/folder/favorites', icon: 'call' }
    ] },
  ];
  showSubpages = false;

  constructor() {}

  ngOnInit() {}

  toggleSubpages() {
    this.showSubpages = !this.showSubpages;
  }
  
}
