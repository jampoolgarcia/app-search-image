import { Component, Input, OnInit } from '@angular/core';
import { ImageI } from 'src/app/model/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [`
    .h-45 {
      height: 45%;
    }

    .h-px-350 {
      height: 300px;
    }
  `]
})
export class ImageComponent implements OnInit {

  @Input() image!: ImageI;

  constructor() { }

  ngOnInit(): void {
  }

}
