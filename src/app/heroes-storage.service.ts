import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

const storageName = 'heroes_list';

@Injectable()
export class HeroesStorageService {
  heroList;

  constructor() {
    this.heroList = HEROES;
  }

  // get heroes
  get() {
    return this.heroList;
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
