import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "ellipsis",
})
export class EllipsisPipe implements PipeTransform {

    public transform(value: any, len: any) {

        const theValue = String(value);
        const theLen = Number(len ? len : 10);

        if (theValue.length > theLen) {
            return theValue.slice(0, theLen) + "...";
        }

        return theValue;
    }

}
