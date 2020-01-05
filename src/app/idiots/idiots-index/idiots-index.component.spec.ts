import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsIndexComponent } from './idiots-index.component';

describe('IdiotsIndexComponent', () => {
  let component: IdiotsIndexComponent;
  let fixture: ComponentFixture<IdiotsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
