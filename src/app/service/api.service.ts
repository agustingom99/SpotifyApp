import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {token} from '../Token'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  spotifyHeaders(){
    return{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer BQBzM30zfmTY9zM5apH73-eD5SQCIK4w4IoP8k2Gaw0Xh-Az2n56Nes8nccqbcosFF_nWqpA1wtbLgWaGV7nDjN6vxusl4aMZfutziGpOM_M5-xu8RvtUon9r-hB9bhA8tBHdVluHAbULUmq8xoRrq3VB1bf9_B8YMxyKjDWoG2egGrS8AlDFarL_zSO310oz64 `
    }
  }

  searchSongs(name:string):Observable<any>{
    return this._http.get(`https://api.spotify.com/v1/search?q=${name}&type=track`,{
      headers: this.spotifyHeaders()
    })
  }
}
