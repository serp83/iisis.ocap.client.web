import {Component} from "@angular/core";

@Component({
    selector: 'clipboardDataComponent',
    template: `<textarea id="clipboardDataComponent" style="opacity: 0;"></textarea>`
})
export class ClipboardDataComponent {

    static fromClipboard(currentElement: any): string {
        var value = "";
        try {
            var _el: any = document.getElementById("clipboardDataComponent");
            _el.select();
            document.execCommand("Paste");

            value = _el.value;
            // new ClipboardEvent("paste", {dataType: "text/plain", data: "some data"});
        } catch (err) {
            // console.log("Ошибка копирования из буфера обмена: " + err);
        }

        currentElement.focus();
        return value;
    }

    static toClipboard(value: string, currentElement: any) {
        try{
            var _el: any = document.getElementById("clipboardDataComponent");
            _el.value = value;
            _el.select();
            var successful = document.execCommand('copy');

            value = successful ? 'successful' : 'unsuccessful';
            // new ClipboardEvent("paste", {dataType: "text/plain", data: "some data"});
        } catch (err) {
            console.log("Ошибка копирования в буфер обмена: " + err);
        }

        currentElement.focus();
        return value;
    }
}
