import {Component, Input} from '@angular/core';
import {Filter, FilterListRow} from "./filterList.component";

@Component({
  moduleId: module.id,
  selector: 'filterCheckBoxComponent',
  template: `
    <p-panel header="{{filterListRow_.d}}" [toggleable]="true" [collapsed]="true">
      <div class="ui-g">

        <div *ngFor='let filterValueListRow of filterListRow_.filterValueList' class="ui-g-12">
          <p-checkbox name="group1" value="{{filterValueListRow.v}}" label="{{filterValueListRow.v}}"
                      [(ngModel)]="filterListRow_.selectedFilterList"
                      inputId="{{filterValueListRow.i}}"></p-checkbox>
        </div>
      </div>
    </p-panel>`

})
export class FilterCheckBoxComponent extends Filter {

  @Input()
  set filterListRow(filterListRow: FilterListRow) {
    this.setFilterListRow(filterListRow);
  }

}
