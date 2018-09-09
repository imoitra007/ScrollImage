import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImglistcontainerComponent } from './imglistcontainer.component';

describe('ImglistcontainerComponent', () => {
  let component: ImglistcontainerComponent;
  let fixture: ComponentFixture<ImglistcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImglistcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImglistcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
