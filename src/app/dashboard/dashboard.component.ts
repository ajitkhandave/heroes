import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock.heroes';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
