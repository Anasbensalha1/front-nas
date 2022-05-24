import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDelegatedAdminComponent } from './list-delegated-admin.component';

describe('ListDelegatedAdminComponent', () => {
  let component: ListDelegatedAdminComponent;
  let fixture: ComponentFixture<ListDelegatedAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDelegatedAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDelegatedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
