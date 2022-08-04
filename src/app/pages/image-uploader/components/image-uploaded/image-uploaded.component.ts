import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/shared/services/images/images.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-uploaded',
  templateUrl: './image-uploaded.component.html',
  styleUrls: ['./image-uploaded.component.css']
})
export class ImageUploadedComponent implements OnInit {

  imageUrl!: string;
  image!: SafeUrl;


  constructor(
    private activeRoute: ActivatedRoute,
    private clipboard: Clipboard,
    private sanitizer: DomSanitizer,
    private imageApiService: ImagesService
  ) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id'];

    this.imageUrl = `${environment.API_BASE_URL}/images/photo-${id}`;
    this.imageApiService.get$(id)
    .subscribe({
      next: (imageFound: any) => {
        const url = URL.createObjectURL(imageFound);
        this.image = this.sanitizer.bypassSecurityTrustUrl(url);
      }
    });

  }

  onCopy(text: string | null) {
    if (text === null) return;

    this.clipboard.copy(text);
  }

}
