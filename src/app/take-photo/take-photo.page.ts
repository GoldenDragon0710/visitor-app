import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit {
  constructor(public photoService: PhotoService, private router: Router) {}
  imagePath? = '';

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  submitPhoto() {
    console.log(this.photoService.photo?.webviewPath);
    this.router.navigate(['/home']);
  }

  retakePhoto() {
    this.photoService.photo = null;
  }

  ngOnInit() {}
}
