import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTemplateComponent } from './data-template.component';

describe('DataTemplateComponent', () => {
  let component: DataTemplateComponent;
  let fixture: ComponentFixture<DataTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
