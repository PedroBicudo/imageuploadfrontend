import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.css']
})
export class ImageSelectComponent implements OnInit {

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit(): void {
  }

  onSelect({addedFiles}: any) {
    if (addedFiles.length === 0) return;

    this.fileService.file$.emit(addedFiles[0] as File);
  }

}
