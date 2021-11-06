import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientesPizzaMargaritaComponent } from './ingredientes-pizza-margarita.component';

describe('IngredientesPizzaMargaritaComponent', () => {
  let component: IngredientesPizzaMargaritaComponent;
  let fixture: ComponentFixture<IngredientesPizzaMargaritaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesPizzaMargaritaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientesPizzaMargaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
