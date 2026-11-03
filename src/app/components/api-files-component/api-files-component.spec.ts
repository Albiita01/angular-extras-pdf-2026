import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiFilesComponent } from './api-files-component';

describe('ApiFilesComponent', () => {
  let component: ApiFilesComponent;
  let fixture: ComponentFixture<ApiFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiFilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiFilesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
