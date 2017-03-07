import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';

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
      AppRoutingModule
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent


  ],

  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
