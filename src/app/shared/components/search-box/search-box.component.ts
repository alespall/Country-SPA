import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @ViewChild('txtInput') tagInput!:ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string=''

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();

  emitValue(value: string):void{
    // const newTag=this.tagInput.nativeElement.value;
    // console.log('Etiqueta buscada: ', newTag);
    // this.tagInput.nativeElement.value='';
    //this.onValue.emit('enviando mensja');
    this.onValue.emit(value)
  }

}
