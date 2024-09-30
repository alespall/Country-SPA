import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries : Country[]=[]

  constructor(private countrieService: CountriesService){}

  searchByCapital(term:string):void{
    // console.log('Desde ByCapitalPage')
    // console.log({term}) //aqui recibimos el mensaje emitido por el hijo

    //si no no subscribimos al observable no enviamos nada
    this.countrieService.searchCapital(term)
      .subscribe(countries => {
        this.countries=countries;
      });
  }
}
