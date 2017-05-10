import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { Color } from "../models/color";

@Component({
    selector: "color-tool",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <ul>
            <li *ngFor="let color of colors | slice:1">{{color.name | capitalize}}</li>
        </ul>
        <form novalidate [formGroup]="newColorForm">
            <div>
                <label for="new-color-input">New Color</label>
                <input type="text" id="new-color-input"
                    formControlName="newColorInput">
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
    `,
})
export class ColorToolComponent {

    public toolHeader = "Color Tool";

    public newColorForm = new FormGroup({
        newColorInput: new FormControl(""),
    });

    public newColor: string = "";

    public colors: Color[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];


    public addColor() {

        const nextIndex = this.colors.reduce(
            (maxId, color) => Math.max(maxId, color.id), 0) + 1;

        console.log(this.newColorForm.value);

        this.colors = this.colors.concat({
            id: nextIndex,
            name: this.newColorForm.value.newColorInput,
        });
    }


}
