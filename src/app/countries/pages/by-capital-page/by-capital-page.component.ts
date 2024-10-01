import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries : Country[]=[]
  public isLoadng: boolean=false;
  public initialValue:string='';

  constructor(private countrieService: CountriesService){}

  ngOnInit(): void {
    this.countries=this.countrieService.cacheStore.byCapital.countries;
    this.initialValue=this.countrieService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string):void{
    // console.log('Desde ByCapitalPage')
    // console.log({term}) //aqui recibimos el mensaje emitido por el hijo
    this.isLoadng=true;
    //si no no subscribimos al observable no enviamos nada
    this.countrieService.searchCapital(term)
      .subscribe(countries => {
        this.countries=countries;
        this.isLoadng=false;
      });
  }
}
