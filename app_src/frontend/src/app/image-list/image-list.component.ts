import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Image } from '../image';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  providers: [HttpService]
})
export class ImageListComponent implements OnInit {
  private images;

  constructor(private _http: HttpService) { } 

  loadImages(){
    this._http.getData()
      .subscribe(
            res => {
              console.log('res');
              this.images = res;
              console.log(this.images);
            },
            err => {
                console.log('Error');
            }
        )
  }
  ngOnInit() {
    this.loadImages();
  }

}
