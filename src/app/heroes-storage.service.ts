import { Injectable } from '@angular/core';
import { Hero } from './hero';

const storageName = 'heroes_list';

const HEROES = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroesStorageService {
  private heroList;

  constructor() {
    this.heroList = localStorage.setItem(storageName, JSON.stringify(HEROES));
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
