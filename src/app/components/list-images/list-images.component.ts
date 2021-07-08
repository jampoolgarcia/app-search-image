import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageI } from 'src/app/model/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styles: []
})
export class ListImagesComponent implements OnDestroy {

  public subcription = new Subscription();
  public isLoading: boolean = false;
  public listImages: ImageI[] = [];
  public msg = '';

  constructor(private _service: ImagesService) {
    this.subcription = this._service.getSearch()
      .subscribe(data => {
        this.getImagesList(data);
      });
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  getImagesList(search: string){
    this.isLoading = true;
    this._service.getImages(search)
      .subscribe(data => {
        data.length > 0 ? this.msg = '' :  this.msg = `No se encontraron imagenes por "${search}"`;
        this.listImages = data;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.listImages = [];
        this.isLoading = false;
      })
  }

}
