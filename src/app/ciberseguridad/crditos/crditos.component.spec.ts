import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrditosComponent } from './crditos.component';

describe('CrditosComponent', () => {
  let component: CrditosComponent;
  let fixture: ComponentFixture<CrditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrditosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
