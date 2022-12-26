import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SentitemsComponent} from "./sent items/sentitems.component";
import {RouterModule, Routes} from "@angular/router";
import {FavoritesComponent} from "./Favorites/favorites.component";
import {InboxComponent} from "./inbox/inbox.component";


const appRoutes: Routes=[
  {path: '',component:FavoritesComponent},
  {path: 'sent items',component: SentitemsComponent},
  {path: 'inbox',component: InboxComponent},
]
@NgModule({
  declarations: [
    AppComponent,SentitemsComponent,FavoritesComponent,InboxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
