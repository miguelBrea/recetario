import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TartarAtunRecetaComponent } from './tartar-atun-receta.component';

describe('TartarAtunRecetaComponent', () => {
  let component: TartarAtunRecetaComponent;
  let fixture: ComponentFixture<TartarAtunRecetaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TartarAtunRecetaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TartarAtunRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
