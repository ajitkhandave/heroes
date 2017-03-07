import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock.heroes';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

   constructor(
   private router: Router,
   private heroService: HeroService) { }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
      this.getHeroes();
    }
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
      }
}


