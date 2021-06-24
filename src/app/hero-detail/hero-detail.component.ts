import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroesStorageService } from '../heroes-storage.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(private storage: HeroesStorageService) {}

  ngOnInit() {}

  save(hero: Hero) {
    // localStorage.setItem('heroes_list', JSON.stringify(hero));
    // this.storage.put(this.storage.heroList, hero);
    //Find index of specific object using findIndex method.
    let objIndex = this.storage.heroList.findIndex(obj => obj.id == hero.id);

    //Log object to Console.
    console.log('Before update: ', this.storage.heroList[objIndex]);

    //Update object's name property.
    this.storage.heroList[objIndex].name = hero.name;

    //Log object to console again.
    console.log('After update: ', this.storage.heroList[objIndex]);

    this.storage.put(hero, hero);
    console.log(this.storage.heroList.indexOf(hero));
    console.log(this.storage.heroList);
    // return this.storage.put(this.storage, hero);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
