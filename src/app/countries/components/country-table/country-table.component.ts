import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:35px
    }
    `
  ]
})
export class CountryTableComponent {

  //queremos recibir los paises entonces tendremos que tener un input
  @Input()
  public countries:Country[]=[]
}
