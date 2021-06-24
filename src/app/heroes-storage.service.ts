import { Injectable } from '@angular/core';
// import { Hero } from './hero';
import { HEROES } from './mock-heroes';

const storageName = 'heroes_list';

@Injectable()
export class HeroesStorageService {
  private heroList;
  heroeslist = HEROES;

  constructor() {
    this.heroList = JSON.parse(localStorage.getItem(storageName)) || heroeslist;
  }

  // get items
  get() {
    return [...this.heroList];
  }

  // update an item
  put(item, changes) {
    Object.assign(this.heroList[this.findItemIndex(item)], changes);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.heroList));

    return this.get();
  }

  private findItemIndex(item) {
    return this.heroList.indexOf(item);
  }
}
