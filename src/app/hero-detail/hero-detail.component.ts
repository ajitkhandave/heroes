import { Component, OnInit, Input } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent{
    @Input()
  hero: Hero;


}

