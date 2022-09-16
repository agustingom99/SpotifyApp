import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './Components/app/app.component';
import { ExplorerComponent } from './Components/explorer/explorer.component';
import { SongComponent } from './Components/song/song.component';



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
    path: 'song/:id',
    component: SongComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
