import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actions-sheet',
  templateUrl: './actions-sheet.page.html',
  styleUrls: ['./actions-sheet.page.scss'],
})
export class ActionsSheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController ) { }

  ngOnInit() {
  }
  onClick(){
    this.presentActionSheet();
    
  }

  /*Mostrando action sheet de la documentación*/
  

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'LFERCHO',
      backdropDismiss:false,
      subHeader: 'TICS',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
    /*Mostrando action sheet*/

}
