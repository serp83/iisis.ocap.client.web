import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'searchComponent',
  templateUrl: './search.html'
})
export class SearchComponent {
  public value: string;

  constructor(private router: Router) {
    // this.route.queryParams
    //   .subscribe(params => {
    //     console.log(params); // {order: "popular"}
    //   });
  }

  onSearch(value: string) {
    return this.router.navigate(['/analogList', {d: value}]);
  }
}
