import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SentitemsComponent} from "./sent items/sentitems.component";
import {RouterModule, Routes} from "@angular/router";
import {FavoritesComponent} from "./Favorites/favorites.component";
import {InboxComponent} from "./inbox/inbox.component";
import {DraftsComponent} from "./drafts/drafts.component";
import {OutboxComponent} from "./outbox/outbox.component";
import {JohnComponent} from "./john/john.component";


const appRoutes: Routes=[
  {path: '',component:FavoritesComponent},
  {path: 'sent items',component: SentitemsComponent},
  {path: 'inbox',component: InboxComponent},
  {path: 'drafts',component: DraftsComponent},
  {path: 'outbox',component: OutboxComponent},
  {path: 'john',component: JohnComponent}
]
@NgModule({
  declarations: [
    AppComponent,SentitemsComponent,FavoritesComponent,InboxComponent,
    DraftsComponent,OutboxComponent,JohnComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
