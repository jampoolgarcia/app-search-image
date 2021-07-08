import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageI } from 'src/app/model/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styles: [`
    a {
      cursor: pointer;
    }
  `]
})
export class ListImagesComponent implements OnDestroy {

  public subcription = new Subscription();
  public isLoading: boolean = false;
  public listImages: ImageI[] = [];
  public msg = '';
  public search = '';

  constructor(private _service: ImagesService) {
    this.subcription = this._service.getSearch()
      .subscribe(data => {
        this.search = data;
        this.getImagesList();
      });
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  getImagesList(){
    this.isLoading = true;
    this._service.getImages(this.search)
      .subscribe(data => {
        data.length > 0 ? this.msg = '' :  this.msg = `No se encontraron imagenes por "${this.search}"`;
        this.listImages = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.listImages = [];
        this.isLoading = false;
      })
  }

  get isPrevious(): boolean {
    return this._service.page <= 1;
  }

  get isNext(): boolean {
    return this._service.page >= this._service.totalPages;
  }

  onNext(){
    this._service.page++;
    this.getImagesList();
  }

  onPrevious(){
    this._service.page--;
    this.getImagesList();
  }

}
