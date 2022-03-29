import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-new-component> </app-new-component> <router-outlet></router-outlet> ',

  /* ' <!-- app-diretivas-estruturais></app-diretivas-estruturais>--> <!-- app-diretivas-atributos> <h1>Aulas de Diretivas Atributo </h1>  <h3> Final da aula </h3>  </app-diretivas-atributos> -->   <router-outlet></router-outlet> ', */
})
export class AppComponent implements OnInit{
  
  public destruir: boolean = true;
  
  
  
  constructor(){
  }

  
  ngOnInit(): void {
    
  }

  public destruirComponent(){

  }
}
