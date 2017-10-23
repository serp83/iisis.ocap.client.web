import { Directive, Component, OnInit, Input } from '@angular/core';
import {PriceProduct} from "../xsd/v2017/priceProductList";
import {HttpService} from "../../fapi/http.service";


@Component({
  moduleId: module.id,
  selector: 'priceListComponent',
  templateUrl: './priceList.html'

})
export class PriceListComponent {
  priceProductList: PriceProduct[];

  constructor(private httpService: HttpService) {

  }

  @Input()
  set i(i: number) {
    this.getPriceProductList(i);

  }

  getPriceProductList(i:number) {

    // this.priceProductList = [{"Id":1483,"ds":"SHELL","ns":"550023517","des":"ATF 134 FE-209","p":0},{"Id":1484,"ds":"SHELL","ns":"550014293","des":"ATF 134-209","p":0},{"Id":1485,"ds":"SHELL","ns":"550013846","des":"ATF 3403 M-115 -20","p":0},{"Id":1486,"ds":"SHELL","ns":"550014653","des":"ATF M-1375.4-209","p":0},{"Id":1487,"ds":"SHELL","ns":"550032010","des":"Caprinus HPD 40                      -209","p":0},{"Id":1488,"ds":"SHELL","ns":"550040292","des":"Helix HX7 5W-30 -1","p":0},{"Id":1489,"ds":"SHELL","ns":"550040426","des":"Helix HX7 5W-30 -20","p":0},{"Id":1490,"ds":"SHELL","ns":"550040304","des":"Helix HX7 5W-30 -4","p":0},{"Id":1491,"ds":"SHELL","ns":"550046520","des":"Helix HX7 5W-30 -55","p":0},{"Id":1492,"ds":"SHELL","ns":"550040308","des":"Helix HX7 5W-30-209","p":0}];
    return this.httpService.getObjectList("/api/ruca/productList?ecoi=" + i).subscribe(
      // return this.httpService.getObjectList("/api/ruca/priceProductList.json").subscribe(
      data => {
        this.priceProductList = data;
      },
      error => {
        alert("Сервер временно не доступен. Описание: " + error);
      }
    );
  }


  getPriceProductList1() {
    //
    // return this.http.get("/ruca/productList?ecoi=100").subscribe(
    //     data => {
    //         this.priceProductList = data['results'];
    //     },
    //     error => {
    //         alert("Сервер временно не доступен. Описание: " + error);
    //     }
    // );
  }

}
