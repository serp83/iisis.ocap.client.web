import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule, JsonpModule} from "@angular/http";
import {
  AccordionModule,
  ButtonModule, CarouselModule, ChartModule,
  CheckboxModule, DataGridModule,
  DataTableModule,
  DropdownModule,
  FieldsetModule, ListboxModule,
  MenubarModule, MultiSelectModule,
  PanelModule,
  RadioButtonModule,
  SharedModule,
  SliderModule
} from "primeng/primeng";
import {AppComponent} from "./app.component";
import {HttpService} from "./http.service";
import {PriceListComponent} from "./av/priceList/priceList.component";
import {CatalogCarComponent} from "./av/catalogList/catalogCar/catalogCar.component";
import {PriceProductComponent} from "./av/priceList/priceProduct.component";
import {RouterModule, Routes} from "@angular/router";
import {CatalogListComponent, CatalogListService} from "./av/catalogList/catalogList.component";
import {CatalogOilComponent} from "./av/catalogList/catalogOil/catalogOil.component";
import {CatalogTiresComponent} from "./av/catalogList/catalogTires/catalogTires.component";
import {FilterComponent} from "./av/filterList/filter.component";
import {FilterListComponent} from "./av/filterList/filterList.component";
import {CatalogAutoChemistryComponent} from "./av/catalogList/autoChemistry/catalogAutoChemistry.component";
import {FilterCheckBoxComponent} from "./av/filterList/filterCheckBox.component";
import {FilterSliderComponent} from "./av/filterList/filterSlider.component";
import {FapiComponent, FapiService} from "./fapi/fapi.component";
import {SearchComponent} from "./fapi/search.component";

const appRoutes: Routes = [
  {path: '', component: CatalogListComponent},
  {path: 'catalogList/oil', component: CatalogOilComponent},
  {path: 'catalogList/tires', component: CatalogTiresComponent},
  {path: 'catalogList/autoChemistry', component: CatalogAutoChemistryComponent},
  {path: 'analogList', component: FapiComponent}
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
    ChartModule,
    DataGridModule,
    MultiSelectModule,
    ListboxModule
  ],
  providers: [HttpService, FapiService, CatalogListService],
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
    FilterListComponent,
    FilterCheckBoxComponent,
    FilterSliderComponent,
    FapiComponent,
    SearchComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
