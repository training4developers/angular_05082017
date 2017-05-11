import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

@Component({
    selector: "color-tool",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <unordered-list [listItems]="colorNames"></unordered-list>
        <color-form (onSaveColor)="addColor($event)"></color-form>
    `,
})
export class ColorToolComponent implements OnInit {

    public toolHeader = "Color Tool";

    public colors: Color[] = [];

    // private colorsSvc: ColorsService;

    // constructor(colorsSvc: ColorsService) {
    //     this.colorsSvc = colorsSvc;
    // }

    constructor(
        private colorsSvc: ColorsService,
    ) { }

    public ngOnInit() {

        this.colorsSvc.getAll().then((colors) => {
            this.colors = colors;
        });

    }

    public get colorNames() {
        return this.colors.map((color) => color.name);
    }

    public addColor(newColor: string) {
        // this.colors = this.colorsSvc.append({ name: newColor }).getAll();
    }


}
