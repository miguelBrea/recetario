import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaPizzaMargaritaComponent } from './receta-pizza-margarita.component';

describe('RecetaPizzaMargaritaComponent', () => {
  let component: RecetaPizzaMargaritaComponent;
  let fixture: ComponentFixture<RecetaPizzaMargaritaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaPizzaMargaritaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaPizzaMargaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
