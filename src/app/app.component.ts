import {Component} from "@angular/core";
import {MenuItem} from "primeng/components/common/menuitem";


export class Menu {
  public static menuItemList: MenuItem[] = [
    {
      label: 'Каталоги', url: '/',
      items: [
        {label: 'Масла', url: '/catalogList/oil'},
        {label: 'Шины', url: '/catalogList/tires'},
        {label: 'Автохимия', url: 'catalogList/autoChemistry'},
        {label: 'Щетки Стеклоочистителя', url: '/catalogList/oil'},
        {label: 'Выхлопная система', url: '/catalogList/oil'},
        {label: 'Инструменты', url: '/catalogList/oil'}
      ]
    }];

}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent {
  public menuItemList: MenuItem[] = Menu.menuItemList;

}
