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
      icon:"star-half-outline",
      name:"_ALERT-PAGE_",
      redirecTo:"/alert.page"
    },
    {
      icon:"home-outline",
      name:"_INICIO-PAGE_",
      redirecTo:"/inicio.page"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
