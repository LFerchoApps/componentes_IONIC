import { Component, OnInit } from '@angular/core';
function mostrarToast() {
  const toast = document.createElement('ion-toast');
  toast.message = '¡Hola, este es un mensaje de Toast!';
  toast.duration = 2000;
  document.body.appendChild(toast);
  return toast.present();
}
@Component({
  selector: 'app-ion-toast',
  templateUrl: './ion-toast.page.html',
  styleUrls: ['./ion-toast.page.scss'],
})
export class IonToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
