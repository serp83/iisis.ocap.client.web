export class Field {
  fieldName: string;
}

export class FieldList {
  field: Field[];
}

export class Filter {
  value: any[];
  fieldName: string;
  comparison: string;
}

export class FilterOperator {
  filter: Filter[];
  filterOperator: FilterOperator[];
  type: string;
}

export class Order {
  fieldName: string;
  orderDirection: string;
}

export class OrderList {
  order: Order[];
}

export class ObjectListOptions {
  fieldList: FieldList;
  filterOperator: FilterOperator;
  orderList: OrderList;
  objectList: string;
  limitRows: number;

}



