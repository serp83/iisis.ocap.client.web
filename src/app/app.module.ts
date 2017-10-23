import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule, JsonpModule} from "@angular/http";
import {
  AccordionModule,
  ButtonModule, CarouselModule,
  CheckboxModule,
  DataTableModule,
  DropdownModule,
  FieldsetModule,
  MenubarModule,
  PanelModule,
  RadioButtonModule,
  SharedModule,
  SliderModule
} from "primeng/primeng";
import {AppComponent} from "./app.component";
import {HttpService} from "./fapi/http.service";
import {PriceListComponent} from "./av/priceList/priceList.component";
import {CarCatalogComponent} from "./av/carCatalog/carCatalog.component";
import {PriceProductComponent} from "./av/priceList/priceProduct.component";
import {RouterModule, Routes} from "@angular/router";
import {CatalogListComponent} from "./av/catalogList/catalogList.component";
import {CatalogOilComponent} from "./av/catalogList/catalogOil/catalogOil.component";

const appRoutes: Routes = [
  {path: '', component: CatalogListComponent},
  {path: 'catalogList/oil', component: PriceListComponent}
];


@NgModule({
  imports: [BrowserModule,
    DataTableModule,
    CarouselModule,
    SharedModule,
    CheckboxModule,
    SliderModule,
    PanelModule,
    RadioButtonModule,
    DropdownModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    FieldsetModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  declarations: [
    AppComponent,
    CarCatalogComponent,
    PriceProductComponent,
    PriceListComponent,
    CatalogListComponent,
    CatalogOilComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
