import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionModule } from './collection/collection.module';
import { AppViewsModule } from './app-views/app-views.module';
import { ModsModule } from './mods/mods.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, StatisticComponent],
  imports: [
    BrowserModule,
    //ElementsModule,
    //CollectionModule,
    //AppViewsModule,
    //ModsModule,
    AppRoutingModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
