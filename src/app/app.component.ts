import {  Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ' <<ng-template [*ngIf="getDados"]> <h1>{{getDados.nome}}</h1><h2>{{getDados.idade}}</h2> </ng-template>       <app-output (enviarDados)="setDados($event)"></app-output> <router-outlet></router-outlet>'
  // <app-input [contador]="addValue"]> </app-input> <button (click)="add()")> Add </button>  <router-outlet></router-outlet>
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;

  public addValue: number = 10;

  public getDados: {nome:string, idade:number} | undefined;

  constructor(){
  }


  ngOnInit(): void {

  }

  public setDados(event: {nome:string, idade:number} ){
    this.getDados = event;

  }

  public add(){
    this.addValue += 1;
  }

  public destruirComponent(){

  }
}
