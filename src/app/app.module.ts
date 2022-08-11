import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './pages/image-uploader/image-uploader.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ImageSelectComponent } from './pages/image-uploader/components/image-select/image-select.component';
import { ImageUploadingComponent } from './pages/image-uploader/components/image-uploading/image-uploading.component';
import { ImageUploadedComponent } from './pages/image-uploader/components/image-uploaded/image-uploaded.component';
import { ImageUploaderCardComponent } from './shared/components/image-uploader-card/image-uploader-card.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageSelectComponent,
    ImageUploadingComponent,
    ImageUploadedComponent,
    ImageUploaderCardComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDropzoneModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
