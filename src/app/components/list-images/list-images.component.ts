import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styles: [
  ]
})
export class ListImagesComponent implements OnInit {

  public isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
