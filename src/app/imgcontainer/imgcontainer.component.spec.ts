import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcontainerComponent } from './imgcontainer.component';

describe('ImgcontainerComponent', () => {
  let component: ImgcontainerComponent;
  let fixture: ComponentFixture<ImgcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
