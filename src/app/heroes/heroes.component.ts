import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroesStorageService } from '../heroes-storage.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  selectedHero!: Hero;

  constructor(private storage: HeroesStorageService) {}

  ngOnInit() {
    this.heroes = this.storage.get();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
