import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosItem } from './todos-item';

describe('TodosItem', () => {
  let component: TodosItem;
  let fixture: ComponentFixture<TodosItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
