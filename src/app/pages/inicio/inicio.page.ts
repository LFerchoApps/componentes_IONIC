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


  ];
  constructor() { }

  ngOnInit() {
  }

}
