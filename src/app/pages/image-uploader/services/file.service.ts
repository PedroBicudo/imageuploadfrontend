import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  file$: EventEmitter<File> = new EventEmitter();

  constructor() { }
}
