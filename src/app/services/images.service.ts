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
  public page!: number;
  public itemsPerPage!: number;
  public totalPages!: number;

  constructor(private _http: HttpClient) {
    this.defaultData();
  }

  setSearch(searchValue: string){
    this.$search.next(searchValue);
  }

  getSearch(): Observable<string>{
    return this.$search.asObservable();
  }

  getImages(search: string): Observable<ImageI[]>{
    const URL = `${URL_BASE}?key=${KEY}&q=${search}&page=${this.page}&per_page=${this.itemsPerPage}`;
    return this._http.get(URL)
      .pipe(
        map(data => this.parseData(data))
      )
  }

  defaultData(){
    this.page = 1;
    this.itemsPerPage = 12;
    this.totalPages = 1;
  }

  parseData(data: any): ImageI[] {
    let list: ImageI[] = [];

    this.totalPages = Math.ceil(data.totalHits / this.itemsPerPage);

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
