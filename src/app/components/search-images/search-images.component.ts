import { Component, OnInit } from '@angular/core';

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
export class SearchImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
