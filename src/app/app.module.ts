import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing/app-routing.module';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
       HttpModule,
       InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],

  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
