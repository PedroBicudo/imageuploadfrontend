import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePath } from 'src/app/pages/image-uploader/components/image-uploading/model/image-path.model';
import { ImagesService } from 'src/app/shared/services/images/images.service';

@Component({
  selector: 'app-image-uploading',
  templateUrl: './image-uploading.component.html',
  styleUrls: ['./image-uploading.component.css']
})
export class ImageUploadingComponent implements OnInit {

  @Input() file!: File;
  uploading: boolean = false;

  isError: boolean = false;
  errorMessage: string = "";

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
        },
        error: (error: any) => {
          this.isError = true;
          this.errorMessage = "An error has occurred while uploading the image. Check if your image has at most 5MB.";
        }
      })
  }

}
