import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styles: []
})
export class ListImagesComponent implements OnDestroy {

  public subcription = new Subscription();
  public isLoading: boolean = false;

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
    console.log('getImageList')
    this.isLoading = true;
    this._service.getImages(search)
      .subscribe(data => {
        console.log(data);
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      })
  }

}
