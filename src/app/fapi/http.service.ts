import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/Observable";
import "rxjs/add/observable/throw";
import {PriceProduct} from "../av/xsd/v2017/priceProductList";
declare var chrome: any;


@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    getObjectList(URL: string): Observable<Array<any>> {
        // return this.http.get(ConstantList.FAPI_URL + "/ruca?ui=00000000-0000-0000-0000-000000000000" + param)
        // return this.http.get("/json/priceProductList.json")
        // "/api?ui=00000000-0000-0000-0000-000000000000" + p + "&json=.json")
        return this.http.get(URL + "&ui=00000000-0000-0000-0000-000000000000")
            .map(this.extractData)
            .catch(this.handleError);
    }



    private extractData(res: Response) {
        let body = res.json();
        return body;
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            errMsg = `${error.status} - ${error.statusText || ''}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }




}
