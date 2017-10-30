import {Component, Injectable} from "@angular/core";
import {HttpService} from "../http.service";
import {AnalogList} from "./xsd/v2017/analogList";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/observable/combineLatest';
import {Observable} from "rxjs/Observable";
import {OLOBuilder} from "../iis/objectlistoptions/OLOBuilder";
import {Filter, FilterOperator} from "../iis/xsd/v2017/objectListOptions";
import {Utils} from "../common/utils";
import {PriceProduct} from "../av/xsd/v2017/priceProductList";
import AnalogListV2 = AnalogList.AnalogListV2;
import ProductListRow = AnalogList.ProductListRow;


@Injectable()
export class FapiService {


  constructor(private httpService: HttpService) {

  }

  route: (d: string, timeOutIn?: number) => void;
}

export class ProductListFull implements ProductListRow {
  i: number;
  mfi: number;
  mfd: string;
  ns: string;
  n: string;
  di: number;
  d: string;

  constructor(i: number, mfi: number, mfd: string, ns: string, n: string, d: string) {
    this.i = i;
    this.mfi = mfi;
    this.mfd = mfd;
    this.ns = ns;
    this.n = n;
    this.d = d;
  }
}

@Component({
  moduleId: module.id,
  selector: 'fapiComponent',
  templateUrl: './fapi.html'
})
export class FapiComponent {
  public analogListV2: AnalogListV2;
  public currentD: string;
  public plByNumber: ProductListFull[];
  public selectedP: ProductListFull;

  priceProductList: PriceProduct[];
  priceProductAnalogList: PriceProduct[];


  constructor(private route: ActivatedRoute, private httpService: HttpService) {
// this.route.params

    Observable.combineLatest(this.route.params, this.route.queryParams)
      .subscribe(([params, queryParams]) => { // полученный массив деструктурируем
        this.currentD = Utils.getNumberStandart(params['d']);

        var oloProduct = new OLOBuilder("av_price_list", "or", 10);
        oloProduct.olo.filterOperator.filterOperator = new Array();
        oloProduct.olo.filterOperator.filterOperator.push(this.createFilterOperator(null, this.currentD));
        this.getPriceProductList(oloProduct, false);
        this.priceProductAnalogList = null;
        this.load();
      });

  }

  load() {
    return this.httpService.getObjectListGET("/fapi/v2/analogList?n=" + this.currentD).subscribe(
      data => {
        this.analogListV2 = data;
        this.build();
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );

  }

  createFilterOperator(mfd: string, ns: string): FilterOperator {
    var fo: FilterOperator = new FilterOperator;
    fo.type = "and";
    fo.filter = new Array();

    var f: Filter = new Filter();
    if (mfd) {
      fo.filter.push(f);
      f.fieldName = "mfd";
      f.comparison = "equal";
      f.value = new Array();
      f.value.push(mfd);
    }


    f = new Filter();
    fo.filter.push(f);
    f.fieldName = "n";
    f.comparison = "equal";
    f.value = new Array();
    f.value.push(ns);

    return fo;
  }

  buildOLOForPriceList() {


    // for (var i = 0; i < pl.length; i++) {
    //   f.value.push(pl[i].i);
    // }

  }

  build() {
    this.plByNumber = new Array();
    for (var i = 0; i < this.analogListV2.productList.p.length; i++) {

      var p: ProductListRow = this.analogListV2.productList.p[i];

      if (p.ns == this.currentD) {
        this.plByNumber.push(new ProductListFull(p.i, p.mfi, this.analogListV2.manufacturerList.mf[p.mfi].ds, p.ns, p.n, p.d));
      }
    }
  }

  getPriceList() {

  }

  handleRowSelect(event) {
    // console.log(event.data);
    var oloProduct = new OLOBuilder("av_price_list", "or", 200);
    oloProduct.olo.filterOperator.filterOperator = new Array();
    oloProduct.olo.filterOperator.filterOperator.push(this.createFilterOperator(this.selectedP.mfd, this.selectedP.ns));
    this.getPriceProductList(oloProduct, false);

    var oloAnalog = new OLOBuilder("av_price_list", "or", 200);
    oloAnalog.olo.filterOperator.filterOperator = new Array();

    var countP: number = 0;
    for (var i = 0; i < this.analogListV2.analogList.a.length; i++) {
      var a = this.analogListV2.analogList.a[i];
      if (this.selectedP.i == a.pi) {
        if (a.mfi == a.mfai && a.ns == a.nsa) {
          console.log("Fail analog " + a.ns);
          continue;
        }

        oloAnalog.olo.filterOperator.filterOperator.push(this.createFilterOperator(this.analogListV2.manufacturerList.mf[a.mfai].da, a.nsa));
        countP++;
        if (countP > 20) break;
      }
    }

    if (countP == 0) {
      this.priceProductAnalogList = new Array;
    } else {
      this.getPriceProductList(oloAnalog, true)
    }
  }

  getPriceProductList(olo: OLOBuilder, analog: boolean) {

    var a: boolean = analog;
    return this.httpService.getObjectListPOST("/api/ruca", olo.getPostObject()).subscribe(
      data => {
        if (a) {
          this.priceProductAnalogList = data;
        } else {
          this.priceProductList = data;
        }
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }
}
