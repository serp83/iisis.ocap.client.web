import {Component, Input} from '@angular/core';
import {PriceProduct} from "../xsd/v2017/priceProductList";
@Component({
    moduleId: module.id,
    selector: 'priceProductComponent',
    templateUrl: './priceProduct.html'

})
export class PriceProductComponent {
    @Input() priceProduct: PriceProduct;

}
