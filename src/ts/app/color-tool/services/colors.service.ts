import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Color } from "../models/color";

@Injectable()
export class ColorsService {

    // private colors: Color[] = [
    //     { id: 1, name: "red" },
    //     { id: 2, name: "gold" },
    //     { id: 3, name: "green" },
    //     { id: 4, name: "white" },
    //     { id: 5, name: "saffron" },
    //     { id: 6, name: "blue" },
    // ];

    constructor(private http: Http) { }

    public getAll(): Promise<Color[]> {
        return this.http
            .get("http://localhost:3010/colors")
            .map((res) => res.json())
            .toPromise();
    }

    public append(newColor: Color) {

        // newColor.id = this.colors.reduce(
        //     (maxId, color) => Math.max(maxId, color.id), 0) + 1;

        // this.colors = this.colors.concat(newColor);
        return this;
    }
}
