import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nome = "Hugo de Freitas";
  constructor() {}

  ngOnInit(){
    this.chamaNome()
    this.nome = "Hugo Vasconcelos";
  }

  chamaNome(string:nome2):void{
    alert('Essa função foi chamada!')
  }

}
