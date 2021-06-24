import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

const storageName = 'heroeslist';

@Injectable()
export class HeroesStorageService {
  heroList;

  constructor() {
    console.dir(localStorage.length);
    // if (localStorage.getItem(storageName) === null) {
    this.heroList = HEROES;
    // }
    // else {
    //   this.heroList = JSON.parse(localStorage.getItem(storageName));
    // }
  }

  // get heroes
  get() {
    return [...this.heroList];
  }

  // update an hero
  put(item: any, changes: any) {
    Object.assign(this.heroList[this.findItemIndex(item)], changes);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.heroList));

    return this.get();
  }

  private findItemIndex(item: any) {
    return this.heroList.indexOf(item);
  }
}
