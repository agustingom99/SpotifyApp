import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import { ExplorerComponent } from './Components/explorer/explorer.component';
import { SongComponent } from './Components/song/song.component'
import { Routes,RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'explorer'
  },
  {
    path: 'explorer',
    component: ExplorerComponent
  },
  {
    path: 'song/id',
    component: SongComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    SongComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
