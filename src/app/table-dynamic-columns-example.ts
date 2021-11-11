import { Component } from '@angular/core';

@Component({
  selector: 'table-dynamic-columns-example',
  styleUrls: ['table-dynamic-columns-example.css'],
  templateUrl: 'table-dynamic-columns-example.html',
})
export class TableDynamicColumnsExample {
  displayedColumns: string[] = [];
  data: any[] = [];
  tabelaVisivel = false;
  resultado = "";

  ngOnInit() {
  }

  charge() {    
    this.resultado = "[{\"N\":\"000001\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,91\"},{\"N\":\"000002\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,92\"},{\"N\":\"000003\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,93\"},{\"N\":\"000004\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,94\"},{\"N\":\"000005\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,95\"},{\"N\":\"000006\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,96\"},{\"N\":\"000007\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,97\"},{\"N\":\"000008\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,98\"},{\"N\":\"000009\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"1,99\"},{\"N\":\"000010\",\"DT\":\"01/01/1900 00:00:00\",\"VL\":\"2,00\"}]";
    
    this.data = JSON.parse(this.resultado);
  }

  definirColunas() {
    this.data.length > 0
      ? (this.displayedColumns = Object.keys(this.data[0]))
      : (this.displayedColumns = ['nenhum registro encontrado!']);
  }

  montarTabela() {
    this.tabelaVisivel = true;
    this.charge();
    this.definirColunas();
  }
}