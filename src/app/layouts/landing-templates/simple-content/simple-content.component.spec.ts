import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleContentComponent } from './simple-content.component';

describe('SimpleContentComponent', () => {
  let component: SimpleContentComponent;
  let fixture: ComponentFixture<SimpleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
