import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {

    public transform(value: any) {

        return String(value).charAt(0).toUpperCase() + String(value).slice(1);
    }

}
