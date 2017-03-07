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
      RouterModule.forRoot([
        {
               path: '',
               redirectTo: '/dashboard',
               pathMatch: 'full'
             },
             {
               path: 'dashboard',
               component: DashboardComponent
             },
             {
               path: 'detail/:id',
               component: HeroDetailComponent
             },
             {
               path: 'heroes',
               component: HeroesComponent
             }
      ])
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,


  ],

  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
