import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images/images.service';
import { ImagePath } from 'src/app/pages/image-uploader/components/image-uploading/model/image-path.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-uploading',
  templateUrl: './image-uploading.component.html',
  styleUrls: ['./image-uploading.component.css']
})
export class ImageUploadingComponent implements OnInit {

  @Input() file!: File;
  uploading: boolean = false;

  constructor(
    private imagesApiService: ImagesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.uploadFile();
  }

  uploadFile() {
    const form = new FormData();
    form.append("file", this.file);
    this.uploading = true;
    this.imagesApiService.upload$(form)
      .subscribe({
        next: (image: ImagePath) => {
          setTimeout(() => {
            this.route.navigate(["/uploaded/photos/", image.name]);
          }, 500);
        }
      })
  }

}
