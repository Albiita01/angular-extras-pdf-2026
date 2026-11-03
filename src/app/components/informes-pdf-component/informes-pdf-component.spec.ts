import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformesPdfComponent } from './informes-pdf-component';

describe('InformesPdfComponent', () => {
  let component: InformesPdfComponent;
  let fixture: ComponentFixture<InformesPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformesPdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformesPdfComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
