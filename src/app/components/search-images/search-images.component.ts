import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styles: [`
    .w-40 {
      width: 40% !important;
    }

    .text-lg {
      font-size: 2rem !important;
    }

    .lg {
      width: 3rem; 
      height: 3rem;
    }

    .b-left-0 {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  `]
})
export class SearchImagesComponent {

  public searchValue = '';

  constructor(public _service: ImagesService) { 

  }

  onSubmit(){
    this._service.setSearch(this.searchValue);
  }


}
