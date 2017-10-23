import {Component, Input} from '@angular/core';
import {HttpService} from "../../fapi/http.service";
import {ParameterListRow, ParameterValueListRow} from "./filterList.component";

export class FilterItem {
  label: string;
  value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}

@Component({
  moduleId: module.id,
  selector: 'filterComponent',
  templateUrl: './filter.html'

})
export class FilterComponent {

  public filterItemList: FilterItem[] = new Array();
  public selectedFilterItemList: string[];
  @Input() public parameterListRow: ParameterListRow;
  public parameterValueList_: ParameterValueListRow[];

  @Input()
  set parameterValueList(list: ParameterValueListRow[]) {
    if(list){
      for (var i = 0; i < list.length; i++) {
        if (list[i].prmi != this.parameterListRow.i) continue;

        this.filterItemList.push(new FilterItem(list[i].v, list[i].v))
      }
    }


  }


  constructor(private httpService: HttpService) {

  }

}
