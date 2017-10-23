import {MessageList} from "../../../iis/xsd/v2017/messageList";
export module AnalogList {
    export class ManufacturerListRow {
        i: number;
        ui: string;
        di: number;
        ds: string;
        da: string;
    }

    export class ManufacturerList {
        mf: ManufacturerListRow[];
    }

    export class ProductListRow {
        i: number;
        mfi: number;
        ns: string;
        n: string;
        di: number;
        d: string;
    }

    export class ProductList {
        p: ProductListRow[];
    }

    export class AnalogListRow {
        i: number;
        ui: string;
        pri:number;
        si: number;
        di:number;
        pi:number;
        mfi: number;
        mfa: string;
        ns: string;
        pai:number;
        mfai: number;
        mfaa: string;
        nsa: string;
        int: number;
        rp: number;
        rm: number;
    }

    export class AnalogList {
        a: AnalogListRow[];
    }

    export class SourceList {
    }

    export class AnalogListV2 {
        manufacturerList: ManufacturerList;
        productList: ProductList;
        analogList: AnalogList;
        sourceList: SourceList;
        messageList: MessageList;
    }

}

