import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEtTypescriptComponent } from './angular-et-typescript.component';

describe('AngularEtTypescriptComponent', () => {
  let component: AngularEtTypescriptComponent;
  let fixture: ComponentFixture<AngularEtTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularEtTypescriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularEtTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
