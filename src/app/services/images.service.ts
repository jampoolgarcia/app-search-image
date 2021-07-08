import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BASE = environment.url_base;
const KEY = environment.key;

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  public $search = new Subject<string>();

  constructor(private _http: HttpClient) { }

  setSearch(searchValue: string){
    this.$search.next(searchValue);
  }

  getSearch(): Observable<string>{
    return this.$search.asObservable();
  }

  getImages(search: string){
    const URL = `${URL_BASE}?key=${KEY}&q=${search}`;
    this._http.get(URL);
  }


}
