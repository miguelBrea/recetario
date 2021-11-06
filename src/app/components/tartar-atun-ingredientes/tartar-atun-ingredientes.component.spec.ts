import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TartarAtunIngredientesComponent } from './tartar-atun-ingredientes.component';

describe('TartarAtunIngredientesComponent', () => {
  let component: TartarAtunIngredientesComponent;
  let fixture: ComponentFixture<TartarAtunIngredientesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TartarAtunIngredientesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TartarAtunIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
