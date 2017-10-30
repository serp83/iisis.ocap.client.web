
import {Filter, FilterOperator, ObjectListOptions} from "../xsd/v2017/objectListOptions";

export class OLOBuilder{
  olo:ObjectListOptions;

  constructor(objectList:string, filterOperatorType:string, limitRows:number){
    this.olo = new ObjectListOptions();
    this.olo.objectList = objectList;
    if(limitRows){
      this.olo.limitRows = limitRows;
    }

    this.olo.filterOperator = new FilterOperator;
    this.olo.filterOperator.type = filterOperatorType;
    this.olo.filterOperator.filter = new Array();
  }

  public createFilter(fieldName:string, comparison:string):Filter {

    var f: Filter = new Filter();
    f.comparison = comparison;
    f.fieldName = fieldName;
    f.value = new Array();

    this.olo.filterOperator.filter.push(f);
    return f;
  }

  public addFilter(fieldName:string, comparison:string, value:any):Filter {

    var f: Filter = new Filter();
    f.comparison = comparison;
    f.fieldName = fieldName;
    f.value = new Array();
    f.value.push(value);

    this.olo.filterOperator.filter.push(f);
    return f;
  }

  public getUrlString():string{
    return encodeURIComponent(JSON.stringify(this.olo));
  }

  public getPostObject():any{
    return JSON.stringify(this.olo);
    // return this.olo;
  }



}



