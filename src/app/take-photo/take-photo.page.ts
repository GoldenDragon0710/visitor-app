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
  isDivVisible = false;
  KeyReturn = false;
  ScannerVisible = false;
  ScannerBtn: boolean = true;
  imagePath? = '';

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  KeyButton() {
    this.KeyReturn = !this.KeyReturn;
  }
  toggleScan() {
    this.ScannerVisible = !this.ScannerVisible;
    this.ScannerBtn = !this.ScannerBtn;
  }

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
