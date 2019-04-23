import { Injectable } from '@angular/core';

import { UserDetails } from '../../vo/user-details';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  playerArray = [];
  lastIndex: number;
  constructor() { }

  addPlayer(userDetails: UserDetails) {
    userDetails.id = this.getNextIndex();
    this.playerArray.push(userDetails);
    this.persist("PLAYER_LIST", this.playerArray);
  }
  removePlayer(id: number) {
    //this.playerArray.findIndex(id);
  }
  getPlayers() {
    if (!this.playerArray || this.playerArray.length <= 0) {
      this.playerArray = this.retrieve("PLAYER_LIST");

    }
    return this.playerArray;
  }

  loginPlayer(userDetails: UserDetails) {
    this.persist("CURRENT_PLAYER", userDetails);
  }

  getProfile() {
    return this.retrieve("CURRENT_PLAYER");
  }

  delete(userDetails: UserDetails) {
    var list = this.getPlayers();
    let idx: number = list.indexOf(userDetails);
    if (idx => 0) {
      list.splice(idx, 1);
    }
  }

  clearAll() {
    this.playerArray = [];
    this.persist("PLAYER_LIST", this.playerArray);
  }

  persist(keyPersist, valuePersist) {
    localStorage.setItem(keyPersist, JSON.stringify(valuePersist));
  }

  retrieve(keyPersist) {
    var jsonStr = localStorage.getItem(keyPersist);
    if (jsonStr) {
      return JSON.parse(jsonStr);
    }
    return {};
  }

  getNextIndex() {
    var arr = this.getPlayers();
    if (arr.length > 0) {
      let x: UserDetails = arr[arr.length - 1];
      this.lastIndex = (!x.id) ? 1 : x.id + 1;
      //this.lastIndex = x.id + 1;
    } else {
      this.lastIndex = 1;
    }
    return this.lastIndex;
  }
}
