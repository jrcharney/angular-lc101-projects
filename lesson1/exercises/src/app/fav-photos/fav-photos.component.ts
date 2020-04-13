import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Gallery';
  image1 = '../assets/synthwave_all_the_things.jpg';
  image2 = '../assets/Trogdor_smote_Kerrek.jpg';
  image3 = '../assets/The_Kiss_by_Gustav_Klimt.jpg';

  constructor() { }

  ngOnInit() {
  }

}
