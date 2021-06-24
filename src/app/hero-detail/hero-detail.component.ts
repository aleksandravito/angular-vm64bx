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
    return this.storage.put(hero, hero);
    // console.log(this.storage.heroList.indexOf(hero));
    // console.log(this.storage.heroList);
    // console.log(typeof localStorage.getItem('heroes_list'));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
