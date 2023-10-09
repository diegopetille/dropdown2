import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDropdownCdComponent } from './item-dropdown-cd.component';

describe('ItemDropdownCdComponent', () => {
  let component: ItemDropdownCdComponent;
  let fixture: ComponentFixture<ItemDropdownCdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDropdownCdComponent]
    });
    fixture = TestBed.createComponent(ItemDropdownCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
