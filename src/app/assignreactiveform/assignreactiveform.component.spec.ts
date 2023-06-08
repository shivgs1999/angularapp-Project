import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignreactiveformComponent } from './assignreactiveform.component';

describe('AssignreactiveformComponent', () => {
  let component: AssignreactiveformComponent;
  let fixture: ComponentFixture<AssignreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
