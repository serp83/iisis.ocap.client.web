import {Component, Input} from '@angular/core';

export class Filter {
  public filterListRow_: FilterListRow;

  setFilterListRow(filterListRow: FilterListRow) {
    this.filterListRow_ = filterListRow;

    if (filterListRow.filterValueList) {
      for (var i = 0; i < filterListRow.filterValueList.length; i++) {
        filterListRow.filterValueList[i].label = filterListRow.filterValueList[i].v;
        filterListRow.filterValueList[i].value = filterListRow.filterValueList[i].v;
      }
    }
  }
}

export class FilterListRowUtils {

  static init(f: FilterListRow) {
    f.component = "filter";
    f.filterValueList = new Array;
    f.rangeValues = [0, 150000];
    f.selectedFilterList = [];
  }

  static setComponent(f: FilterListRow) {

    f.component = "filter";
    if (f.t === "string_255") {
      if (f.filterValueList.length < 4) {
        f.component = "filterCheckBox";
      }

    } else if (f.t === "decimal_11_2") {
      if (f.filterValueList.length == 0) {
        f.component = "filterSlider";
      }
    }
  }
}

export class FilterListRow {
  i: number;
  d: string;
  t: string;
  composite: number;
  filterValueList: FilterValueListRow[];
  component: string;
  selectedFilterList: string[];
  rangeValues: number[];
}

export class FilterValueListRow {
  i: number;
  prmi: number;
  d: string;
  v: string;
  label: string;
  value: string;
}


@Component({
  moduleId: module.id,
  selector: 'filterListComponent',
  template: `
    <div *ngFor='let filterListRow of filterList'>
      <filterComponent *ngIf="filterListRow.component == 'filter'" [filterListRow]="filterListRow"></filterComponent>
      <filterCheckBoxComponent *ngIf="filterListRow.component == 'filterCheckBox'"
                               [filterListRow]="filterListRow"></filterCheckBoxComponent>
      <filterSliderComponent *ngIf="filterListRow.component == 'filterSlider'"
                             [filterListRow]="filterListRow"></filterSliderComponent>
    </div>`

})
export class FilterListComponent {
  @Input() public filterList: FilterListRow[];

}
