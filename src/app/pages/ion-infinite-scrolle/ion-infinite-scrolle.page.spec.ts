import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonInfiniteScrollePage } from './ion-infinite-scrolle.page';

describe('IonInfiniteScrollePage', () => {
  let component: IonInfiniteScrollePage;
  let fixture: ComponentFixture<IonInfiniteScrollePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonInfiniteScrollePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonInfiniteScrollePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
