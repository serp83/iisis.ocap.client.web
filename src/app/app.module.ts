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
  MenubarModule, MultiSelectModule,
  PanelModule,
  RadioButtonModule,
  SharedModule,
  SliderModule
} from "primeng/primeng";
import {AppComponent} from "./app.component";
import {HttpService} from "./fapi/http.service";
import {PriceListComponent} from "./av/priceList/priceList.component";
import {CatalogCarComponent} from "./av/catalogList/catalogCar/catalogCar.component";
import {PriceProductComponent} from "./av/priceList/priceProduct.component";
import {RouterModule, Routes} from "@angular/router";
import {CatalogListComponent} from "./av/catalogList/catalogList.component";
import {CatalogOilComponent} from "./av/catalogList/catalogOil/catalogOil.component";
import {CatalogTiresComponent} from "./av/catalogList/catalogTires/catalogTires.component";
import {FilterComponent} from "./av/filterList/filter.component";
import {FilterListComponent} from "./av/filterList/filterList.component";
import {CatalogAutoChemistryComponent} from "./av/catalogList/autoChemistry/catalogAutoChemistry.component";

const appRoutes: Routes = [
  {path: '', component: CatalogListComponent},
  {path: 'catalogList/oil', component: CatalogOilComponent},
  {path: 'catalogList/tires', component: CatalogTiresComponent},
  {path: 'catalogList/autoChemistry', component: CatalogAutoChemistryComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
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
    MultiSelectModule

  ],
  providers: [HttpService],
  declarations: [
    AppComponent,
    CatalogCarComponent,
    PriceProductComponent,
    PriceListComponent,
    CatalogListComponent,
    CatalogOilComponent,
    CatalogTiresComponent,
    CatalogAutoChemistryComponent,
    FilterComponent,
    FilterListComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
