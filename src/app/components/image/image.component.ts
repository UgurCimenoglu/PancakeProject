import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input()
  imageUrl!: string;

  @Input()
  config = {
    width: 10,
    height: 10,
  };

  constructor() {}

  ngOnInit(): void {}
}
