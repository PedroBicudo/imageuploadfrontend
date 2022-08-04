import { Component, OnInit } from '@angular/core';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  hideSelect: boolean = true;
  hideUploading: boolean = false;
  selectFile!: File;

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.fileService.file$.subscribe((file: File) => {
      this.hideSelect = false;
      this.hideUploading = true;
      this.selectFile = file;
    });
  }
}
