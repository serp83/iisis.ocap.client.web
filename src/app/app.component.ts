import {Component} from "@angular/core";
import {HttpService} from "./fapi/http.service";
import {MenuItem} from "primeng/components/common/menuitem";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent {
  items: MenuItem[];

  constructor(private httpService: HttpService) {

  }


  ngOnInit() {
    this.items = [
      {
        label: 'Каталоги',
        items: [
          {label: 'Масла', url: '/catalogList/oil'},
          {label: 'Шины', url: '/catalogList/tires'},
          {label: 'Автохимия', url: 'catalogList/autoChemistry'},
          {label: 'Щетки Стеклоочистителя', url: '/catalogList/oil'},
          {label: 'Выхлопная система', url: '/catalogList/oil'},
          {label: 'Инструменты', url: '/catalogList/oil'}
          ]
      }
    ];
  }

}
