import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Bem Vindo";

  constructor() { }
  ngOnDestroy(): void {
    console.log("Componente  foi destruido");
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    
  }

}
