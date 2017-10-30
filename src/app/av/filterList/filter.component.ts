import {Component, Input} from '@angular/core';
import {Filter, FilterListRow,} from "./filterList.component";
import {CatalogListService} from "../catalogList/catalogList.component";

@Component({
  moduleId: module.id,
  selector: 'filterComponent',
  template: `
    <p-panel header="{{filterListRow_.d}}" [toggleable]="true" [collapsed]="false">
      <p-multiSelect (onChange)="onChange()" [options]="filterListRow_.filterValueList"
                     [(ngModel)]="filterListRow_.selectedFilterList">
        <!--<ng-template let-param let-i="index" pTemplate="item" >-->
        <!--<div style="font-size:14px;float:right;margin-top:4px">{{param.d}}</div>-->
        <!--</ng-template>-->
      </p-multiSelect>
      <!--<p-listbox [options]="filterItemList" [(ngModel)]="selectedFilterItemList" multiple="multiple" checkbox="checkbox" filter="filter" optionLabel="name" [listStyle]="{'max-height':'200px'}">-->
      <!--</p-listbox>-->
    </p-panel>`

})
export class FilterComponent extends Filter {
  @Input()
  set filterListRow(filterListRow: FilterListRow) {
    this.setFilterListRow(filterListRow);
  }

  constructor(private catalogListService: CatalogListService) {
    super();
  }

  onChange() {
    console.log(this.filterListRow_.selectedFilterList);
    this.catalogListService.getPriceProductList();
  }

}
