import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonProgressIndicatorsPage } from './ion-progress-indicators.page';

describe('IonProgressIndicatorsPage', () => {
  let component: IonProgressIndicatorsPage;
  let fixture: ComponentFixture<IonProgressIndicatorsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonProgressIndicatorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonProgressIndicatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
