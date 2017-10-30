import {Component, Input} from '@angular/core';
import {Filter, FilterListRow} from "./filterList.component";


@Component({
  moduleId: module.id,
  selector: 'filterSliderComponent',
  template: `<p-panel header="{{filterListRow_.d}}" [toggleable]="true" [collapsed]="true">
    <h3>Range: {{filterListRow_.rangeValues[0] + ' - ' + filterListRow_.rangeValues[1]}}</h3>
    <p-slider [(ngModel)]="filterListRow_.rangeValues"  [range]="true" max="15000"></p-slider>

  </p-panel>`

})
export class FilterSliderComponent extends Filter {


  @Input()
  set filterListRow(filterListRow: FilterListRow) {
    this.setFilterListRow(filterListRow);
  }


}
