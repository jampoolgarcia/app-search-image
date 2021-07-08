import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImageI } from '../model/image';

const URL_BASE = environment.url_base;
const KEY = environment.key;

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  public $search = new Subject<string>();

  constructor(private _http: HttpClient) { }

  setSearch(searchValue: string){
    console.log(searchValue);
    this.$search.next(searchValue);
  }

  getSearch(): Observable<string>{
    return this.$search.asObservable();
  }

  getImages(search: string): Observable<any>{
    const URL = `${URL_BASE}?key=${KEY}&q=${search}`;
    return this._http.get(URL)
      .pipe(
        map(data => this.parseData(data))
      )
  }


  parseData(data: any): ImageI[] {
    let list: ImageI[] = [];

    data.hits.forEach((img: any) => {
      list.push({
        url: img.largeImageURL,
        likes: img.likes,
        views: img.views
      })
    });

    return list;
  }



}
