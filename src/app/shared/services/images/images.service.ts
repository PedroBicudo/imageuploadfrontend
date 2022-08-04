import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private api: ApiService
  ) { }

  upload$(image: FormData) {
    return this.api.post$("/images", image);
  }

  get$(id: string) {
    return this.api.get$(`/images/photo-${id}`, {responseType: 'blob'});
  }
}
