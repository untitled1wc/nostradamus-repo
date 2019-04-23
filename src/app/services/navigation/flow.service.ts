import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  constructor() { }

  states = [
    {
      'url': 'register',
      'show': this.showForAll()
    },
    {
      'url': 'deregister',
      'show': this.showForAll()
    },
    {
      'url': 'addplayer',
      'show': this.showForAll()
    },
    {
      'url': 'bowling',
      'show': this.showExceptKeeper()
    },
    {
      'url': 'batting',
      'show': this.showForAll()
    },
    {
      'url': 'keeping',
      'show': this.showOnlyForKeeper()
    }
  ];

  hide() {
    return false;
  }

  showForAll() {
    return true;
  }

  showForKeeperOnly() {

  }
  showOnlyForKeeper() {

  }
  showExceptKeeper() {

  }

}

