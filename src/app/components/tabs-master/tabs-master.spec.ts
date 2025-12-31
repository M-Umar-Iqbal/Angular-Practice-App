import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMaster } from './tabs-master';

describe('TabsMaster', () => {
  let component: TabsMaster;
  let fixture: ComponentFixture<TabsMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
