import { Component, OnInit } from '@angular/core';
import { IonInfiniteScrollePageModule } from './ion-infinite-scrolle.module';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-ion-infinite-scrolle',
  templateUrl: './ion-infinite-scrolle.page.html',
  styleUrls: ['./ion-infinite-scrolle.page.scss'],
})
export class IonInfiniteScrollePage implements OnInit {

  constructor() { }

  items:string[]=[];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item! ${count + i}`);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
