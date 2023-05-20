import {Component} from "@angular/core";

@Component({
  selector:'app-favorites',
  templateUrl:'./favorites.component.html',
  styleUrls:['./favorites.component.css' ]
})
export class FavoritesComponent {
  products: any = [
    {
      id: 1,
      name: 'Gemma Roberson',
      email: 'Apology for late response',
      qty: 'Hello Colette Wooten'
    },
    {
      id: 2,
      name: 'Ann Garza',
      email: 'Application for Job Title',
      qty: 'Hello Kerry best'
    },
    {
      id: 3,
      name: 'Alfonso Burnett',
      email: 'Anything I can help with',
      qty: 'Hello Otto Ashley'
    },
    {
      id: 4,
      name: 'Rogan Espinoza',
      email: 'Assistant Marketing Department',
      qty: 'Hello Kerry Best'
    },
    {
      id: 5,
      name: 'Sierra Kerr',
      email: 'Application for Transfer',
      qty: 'Hi Halee Lindsey'
    }
  ];
}
