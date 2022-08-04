import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderCardComponent } from './image-uploader-card.component';

describe('ImageUploaderCardComponent', () => {
  let component: ImageUploaderCardComponent;
  let fixture: ComponentFixture<ImageUploaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
