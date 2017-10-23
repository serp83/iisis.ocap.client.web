export class Utils {
    public static validateEmail(email: string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    public static getNumberStandart(v: string): string {
        return v.toLowerCase().replace(/[^0-9|a-z|а-я]/g, '');
    }

    public static getManufacturerDA(v: string): string {
        return Utils.getNumberStandart(v).toUpperCase();
    }
}