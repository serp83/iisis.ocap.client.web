import {Component} from '@angular/core';
import {CatalogBase, CatalogListService} from "../catalogList.component";

@Component({
  moduleId: module.id,
  selector: 'catalogOilComponent',
  template: `
    <div class="ui-g">
      <div class="ui-g-2">
        <filterListComponent [filterList]="filterList"></filterListComponent>
      </div>
      <div class="ui-g-10">
        <priceListComponent [priceProductList]="priceProductList"></priceListComponent>
      </div>
    </div>
  `

})
export class CatalogOilComponent extends CatalogBase {

  constructor(private catalogListService: CatalogListService) {
    super();
    catalogListService.setComponent(this, 100);
  }

}
