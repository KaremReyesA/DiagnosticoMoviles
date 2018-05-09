import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeDetailsPage } from '../home-details/home-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   items = [];
  constructor(public nav: NavController) {
    this.items = [
      {
        'img': '../../assets/imgs/han-solo.jpg',
        'nombre': 'Han Solo',
        'titulo': 'Cazarrecompensas'
      },
      {
        'img': '../../assets/imgs/rey.jpg',
        'nombre': 'Rey',
        'titulo': 'Recolectora'
      },
      {
        'img': '../../assets/imgs/finn.jpg',
        'nombre': 'Finn',
        'titulo': 'Piloto'
      },
      {
        'img': '../../assets/imgs/leia.jpg',
        'nombre': 'Leia',
        'titulo': 'Princesa'
      }
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(HomeDetailsPage, { item: item });
    console.log(item);
  }

}
