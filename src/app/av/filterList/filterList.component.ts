import {Component, Input} from '@angular/core';
import {HttpService} from "../../fapi/http.service";


export class ParameterListRow {
  i: number;
  d: string;
  type: string;
  composite: number;
}

export class ParameterValueListRow {
  i: number;
  prmi: number;
  d: string;
  v: string;
}


@Component({
  moduleId: module.id,
  selector: 'filterListComponent',
  templateUrl: './filterList.html'

})
export class FilterListComponent {
  public parameterList: ParameterListRow[];
  public parameterValueList: ParameterValueListRow[];

  constructor(private httpService: HttpService) {

  }

  @Input()
  set i(i: number) {
    this.getParameterList(i);

  }

  getParameterList(tri: number) {
    return this.httpService.getObjectList("/api/ruca/parameterList?tri=" + tri).subscribe(
      data => {
        this.parameterList = data;
        this.getParameterValueList();
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }

  getParameterValueList() {

    if (this.parameterList.length == 0) return;
    var prmIDS: number[] = new Array();
    for (var i = 0; i < this.parameterList.length; i++) {
      prmIDS.push(this.parameterList[i].i)

    }

    return this.httpService.getObjectList("/api/ruca/parameterValueList?prmIDS=" + prmIDS.join(",")).subscribe(
      data => {
        this.parameterValueList = data;
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }
}
