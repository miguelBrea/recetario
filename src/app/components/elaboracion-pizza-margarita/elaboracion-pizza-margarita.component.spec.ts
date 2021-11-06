import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElaboracionPizzaMargaritaComponent } from './elaboracion-pizza-margarita.component';

describe('ElaboracionPizzaMargaritaComponent', () => {
  let component: ElaboracionPizzaMargaritaComponent;
  let fixture: ComponentFixture<ElaboracionPizzaMargaritaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaboracionPizzaMargaritaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElaboracionPizzaMargaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
