import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [`
    .h-45 {
      height: 45%;
    }
  `]
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
