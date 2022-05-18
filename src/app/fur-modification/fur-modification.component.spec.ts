import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurModificationComponent } from './fur-modification.component';

describe('FurModificationComponent', () => {
  let component: FurModificationComponent;
  let fixture: ComponentFixture<FurModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
