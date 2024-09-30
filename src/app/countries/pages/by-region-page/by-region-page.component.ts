import { Component } from '@angular/core';
import { Country } from '../../interfaces/interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[]=[]

  constructor(private countriesService: CountriesService){}

  public searchByRegion(reg: string):void{
    this.countriesService.searchRegion(reg)
      .subscribe(countries =>{
        this.countries=countries;
      })
  }
}
