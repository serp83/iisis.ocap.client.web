import {Component} from '@angular/core';

export class CatalogListRow {
  i: number;
  d: string;
}

@Component({
  moduleId: module.id,
  selector: 'catalogOilComponent',
  templateUrl: './catalogOil.html'

})
export class CatalogOilComponent {
  catalogList: CatalogListRow[];
  i: number = 100;

  constructor() {

    this.catalogList = [
      {i: 100, d: 'Масла'},
      {i: 100, d: 'Шины'},
      {i: 100, d: 'Автохимия'},
      {i: 100, d: 'Выхлопная система'}
    ];
  }

}
