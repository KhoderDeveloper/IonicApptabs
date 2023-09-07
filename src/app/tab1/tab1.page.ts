import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public appPages = [
    { title: 'Favorites', url: '', icon: 'star' ,open: false , subPages: [
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

  toggleSubpages() {
    this.showSubpages = !this.showSubpages;
  }
}
