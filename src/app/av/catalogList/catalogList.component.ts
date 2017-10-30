import {Component, Injectable} from '@angular/core';
import {Menu} from "../../app.component";
import {MenuItem} from "primeng/primeng";
import {HttpService} from "../../http.service";
import {OLOBuilder} from "../../iis/objectlistoptions/OLOBuilder";
import {Filter, FilterOperator} from "../../iis/xsd/v2017/objectListOptions";
import {FilterListRow, FilterListRowUtils, FilterValueListRow} from "../filterList/filterList.component";
import {PriceProduct} from "../xsd/v2017/priceProductList";


@Injectable()
export class CatalogListService {
  private c: CatalogBase;
  private tri: number;

  constructor(private httpService: HttpService) {
  }

  setComponent(c: CatalogBase, tri: number) {
    this.c = c;
    this.tri = tri;
    this.getPriceProductList();
    this.getParameterList(c, tri);
  }

  getParameterList(c: CatalogBase, tri: number) {
    var oloBuilder: OLOBuilder = new OLOBuilder("parametr_list_view", "and", null);
    oloBuilder.addFilter("tri", "equal", tri);

    return this.httpService.getObjectListPOST("/api/ruca", oloBuilder.getPostObject()).subscribe(
      data => {
        var pl: FilterListRow[] = data;

        this.getParameterValueList(c, pl);
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }

  private getParameterValueList(c: CatalogBase, pl: FilterListRow[]) {

    if (pl.length == 0) return;
    var oloBuilder: OLOBuilder = new OLOBuilder("parametr_value_list", "or", null);
    var f: Filter = oloBuilder.createFilter("prmi", "equal");

    for (var i = 0; i < pl.length; i++) {
      f.value.push(pl[i].i);
    }

    return this.httpService.getObjectListPOST("/api/ruca", oloBuilder.getPostObject()).subscribe(
      data => {
        var pvl: FilterValueListRow[] = data;
        this.setValueListToPatameterList(c, pl, pvl);
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }

  private setValueListToPatameterList(c: CatalogBase, filterList: FilterListRow[], filterValueList: FilterValueListRow[]) {

    for (var i = 0; i < filterList.length; i++) {
      filterList[i].filterValueList = new Array();
      FilterListRowUtils.init(filterList[i]);
      for (var ii = 0; ii < filterValueList.length; ii++) {
        if (filterList[i].i == filterValueList[ii].prmi) {
          filterList[i].filterValueList.push(filterValueList[ii]);
        }
      }

      FilterListRowUtils.setComponent(filterList[i]);
    }

    c.filterList = filterList;
  }


  createFilterOperator(prmi: number, t: string, valueList: string[]): FilterOperator {
    var fo: FilterOperator = new FilterOperator;
    fo.type = "and";
    // fo.filter = new Array();
    fo.filterOperator = new Array();

    var f: Filter = new Filter();
    // fo.filter.push(f);
    // f.fieldName = "prmi";
    // f.comparison = "equal";
    // f.value = new Array();
    // f.value.push(prmi);

    var fo0: FilterOperator = new FilterOperator;
    fo.filterOperator.push(fo0);
    fo0.filter = new Array();
    fo0.type = "or";

    for (var i = 0; i < valueList.length; i++) {
      f = new Filter();
      fo0.filter.push(f);
      f.fieldName = t;
      f.comparison = "equal";
      f.value = new Array();
      f.value.push(valueList[i]);

    }

    return fo;
  }

  getPriceProductList() {
    // this.c.priceProductList = new Array;
    var setFilter: boolean = false;
    if (this.c.filterList) {
      var olo: OLOBuilder = new OLOBuilder("priceListByParameterList", "and", this.tri);
      olo.olo.filterOperator.filter = null;
      olo.olo.filterOperator.filterOperator = new Array;


      for (var i = 0; i < this.c.filterList.length; i++) {
        var f: FilterListRow = this.c.filterList[i];
        if (f.selectedFilterList.length == 0) continue;

        olo.olo.filterOperator.filterOperator.push(this.createFilterOperator(f.i, f.t, f.selectedFilterList))

        setFilter = true;
        console.log(olo.getPostObject());
      }
    }

    if(!setFilter){

      var olo: OLOBuilder = new OLOBuilder("price_list", "and", 100);
      olo.addFilter("tri", "equal", this.tri);
    }


    return this.httpService.getObjectListPOST("/api/ruca", olo.getPostObject()).subscribe(
      data => {
        this.c.priceProductList = data;
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }

}

export class CatalogBase {

  filterList: FilterListRow[];
  priceProductList: PriceProduct[];

}

@Component({
  moduleId: module.id,
  selector: 'catalogListComponent',
  templateUrl: './catalogList.html'

})
export class CatalogListComponent {
  menuItemList: MenuItem[] = Menu.menuItemList[0].items;

  constructor() {

  }

}
