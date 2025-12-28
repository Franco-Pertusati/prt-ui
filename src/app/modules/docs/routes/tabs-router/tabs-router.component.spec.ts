import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRouterComponent } from './tabs-router.component';

describe('TabsRouterComponent', () => {
  let component: TabsRouterComponent;
  let fixture: ComponentFixture<TabsRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
