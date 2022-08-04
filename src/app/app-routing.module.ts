import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadedComponent } from './pages/image-uploader/components/image-uploaded/image-uploaded.component';
import { ImageUploaderComponent } from './pages/image-uploader/image-uploader.component';

const routes: Routes = [
  {path: "", redirectTo: "/upload", pathMatch: "full"},
  {path: "upload", component: ImageUploaderComponent},
  {path: "uploaded/photos/:id", component: ImageUploadedComponent},
  {path: "**", redirectTo: "/upload", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
