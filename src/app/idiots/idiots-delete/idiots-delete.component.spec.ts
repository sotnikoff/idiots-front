import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsDeleteComponent } from './idiots-delete.component';

describe('IdiotsDeleteComponent', () => {
  let component: IdiotsDeleteComponent;
  let fixture: ComponentFixture<IdiotsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
