import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss'],
})
export class CaptureComponent {
  constructor(public photoService: PhotoService) {}
  @Output() isShow = new EventEmitter<boolean>(false);
  imagePath? = '';

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  submitPhoto() {
    this.isShow.emit(false);
  }

  retakePhoto() {
    this.photoService.photo = null;
  }
}
