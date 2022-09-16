import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit{

  songs:any []= []

  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._api.searchSongs('Wos').subscribe((response:any) => this.songs = response.tracks.items )
    console.log(this.songs.length)
  }
  entre():void{
    console.log("entre")
  }

  goSong(song:any){
    console.log("entre")
    console.log(song.name)
    this._router.navigate(['song',song.id])

  }
}

