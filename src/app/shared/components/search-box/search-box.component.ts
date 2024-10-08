import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string>=new Subject<string>();
  private debouncerSuscription?:Subscription;

  @ViewChild('txtInput') tagInput!:ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string=''

  @Input()
  public initialValue: string=''

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();

  @Output()
  public onDebounce:EventEmitter<string>=new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription=this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(
      value=>{
        this.onDebounce.emit(value)
      }
    )
  }
  ngOnDestroy():void{
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string):void{
    // const newTag=this.tagInput.nativeElement.value;
    // console.log('Etiqueta buscada: ', newTag);
    // this.tagInput.nativeElement.value='';
    //this.onValue.emit('enviando mensja');
    this.onValue.emit(value)
  }
  onKeyPress(searchTerm:string){
    this.debouncer.next( searchTerm );
  }
}
