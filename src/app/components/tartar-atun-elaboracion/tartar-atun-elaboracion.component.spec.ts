import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TartarAtunElaboracionComponent } from './tartar-atun-elaboracion.component';

describe('TartarAtunElaboracionComponent', () => {
  let component: TartarAtunElaboracionComponent;
  let fixture: ComponentFixture<TartarAtunElaboracionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TartarAtunElaboracionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TartarAtunElaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
