import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';

import { FormsModule } from '@angular/forms';
import { MeteoService } from './services/meteo.service';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AtualitesComponent } from './atualites/atualites.component';

import { Routes,RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PersonalitiesComponent } from './personalities/personalities.component';
import { WheatherForecastComponent } from './wheather-forecast/wheather-forecast.component';
import { NowComponent } from './now/now.component';
import { MinutecastComponent } from './minutecast/minutecast.component';
import { WeekendComponent } from './weekend/weekend.component';
import { ExtendedComponent } from './extended/extended.component';
import { MounthComponent } from './mounth/mounth.component';
import { RadarComponent } from './radar/radar.component';
import { WintercastComponent } from './wintercast/wintercast.component';

import { AuthService } from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'weather', component: InformationComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'news', component: AtualitesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'personalities', component: PersonalitiesComponent },
  
  { path: 'forecast', component: WheatherForecastComponent },
  
  { path: 'now/:id', component: NowComponent },
  { path: 'minutecast/:id', component: MinutecastComponent },
  { path: 'weekend/:id', component: WeekendComponent },
  { path: 'extended/:id', component: ExtendedComponent },
  { path: 'mounth/:id', component: MounthComponent },
  { path: 'radar/:id', component: RadarComponent },
  { path: 'wintercast/:id', component: WintercastComponent },
  
  { path: '', canActivate: [AuthGuard],component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    HomeComponent,
    AuthentificationComponent,
    AtualitesComponent,
    VideosComponent,
    BlogsComponent,
    PersonalitiesComponent,
    WheatherForecastComponent,
    NowComponent,
    MinutecastComponent,
    WeekendComponent,
    ExtendedComponent,
    MounthComponent,
    RadarComponent,
    WintercastComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  	MeteoService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
