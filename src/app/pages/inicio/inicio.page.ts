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
      icon:"finger-print-outline",
      name:"_ACTIONS-SHEET_",
      redirecTo:"/actions-sheet"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
