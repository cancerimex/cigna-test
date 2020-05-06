import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProviderCardComponent } from './provider-card.component';

describe('ProviderCardComponent', () => {
  let component: ProviderCardComponent;
  let fixture: ComponentFixture<ProviderCardComponent>;
  const provider = {
    name: 'Dr Test',
    specialty: 'Something'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a provider', () => {
    component.provider = provider;
    fixture.detectChanges();
    expect(component.provider).toEqual(provider);
  });

  it('should display a card', () => {
    component.provider = provider;
    fixture.detectChanges();
    const cardElement = fixture.debugElement.query(By.css('.card'));
    expect(cardElement).not.toBeNull();
    const providerElement = fixture.debugElement.query(By.css('.provider'));
    expect(providerElement.nativeElement.textContent).toContain('Dr Test');
  });
});
