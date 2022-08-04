import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadedComponent } from './image-uploaded.component';

describe('ImageUploadedComponent', () => {
  let component: ImageUploadedComponent;
  let fixture: ComponentFixture<ImageUploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
