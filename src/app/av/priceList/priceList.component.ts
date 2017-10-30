import {Component, Input} from '@angular/core';
import {PriceProduct} from "../xsd/v2017/priceProductList";
import {Utils} from "../../common/utils";


@Component({
  moduleId: module.id,
  selector: 'priceListComponent',
  templateUrl: './priceList.html'

})
export class PriceListComponent {
  @Input() priceProductList: PriceProduct[];


  getImageUrl(item:PriceProduct):string{
    return "/api/img/" + Utils.getManufacturerDA(item.mfd) + "/" + Utils.getNumberStandart(item.n) + "/img_0.jpg";
  }

}
