import { Component, OnInit } from '@angular/core';
interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    {
      icon:"flower-outline",
      name:"_ACTIONS-SHEET_",
      redirecTo:"/actions-sheet"
    },
    {
      icon:"leaf-outline",
      name:'_ICONS_',
      redirecTo:"/iconos"
    },
    {
      icon:"list-outline",
      name:'_MENU_',
      redirecTo:"/menu"
    },
    {
      icon:"heart-half-outline",
      name:'_CONTENT_',
      redirecTo:"/content"
    },
    {
      icon:"paw-outline",
      name:'_BADGE_',
      redirecTo:"/badge"
    },
    {
      icon:"albums-outline",
      name:'_ION_CARD_CONTENT_',
      redirecTo:"/ion-card-content"
    },
    {
      icon:"apps-outline",
      name:'_BREADCRUMB_',
      redirecTo:"/breadcrumb"
    },
    {
      icon:"balloon-outline",
      name:'_FLOATING_ACTION_BUTTON',
      redirecTo:"/floating"
    },
    {
      icon:"bug-outline",
      name:'_ITEM_INPUT_LABELS',
      redirecTo:"/item"
    },
    {
      icon:"alert-circle-outline",
      name:'_ALERT_PAGE',
      redirecTo:"/ion-alert"
    },
    {
      icon:"hardware-chip-outline",
      name:'_ION_CHIP_',
      redirecTo:"/ion-chip"
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
