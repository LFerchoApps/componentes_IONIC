import { Component, OnInit } from '@angular/core';
interface RefresherEventDetail {
  complete(): void;
}
@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
