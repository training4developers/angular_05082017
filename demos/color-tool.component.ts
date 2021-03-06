import { Component } from "@angular/core";

import { Color } from "../models/color";

@Component({
    selector: "color-tool",
    template: `
        <header>
            <h1>Color Tool</h1>
            <small>{{'Some interesting text goes here.' | ellipsis:3}}</small>
        </header>
        <ul>
            <li *ngFor="let color of colors | slice:1">{{color.name | capitalize}}</li>
        </ul>
        <form novalidate>
            <div>
                <span *ngIf="newColorInputRef.invalid">*</span>
                <label for="new-color-input">New Color</label>
                <input type="text" id="new-color-input"
                    name="newColorInput" [(ngModel)]="newColor"
                    required minlength="3" #newColorInputRef="ngModel">
                <span *ngIf="newColorInputRef.errors && newColorInputRef.errors.required">
                    New Color is Required.
                </span>
                <span *ngIf="newColorInputRef.errors && newColorInputRef.errors.minlength">
                    New Color has a Minimum Length of 3.
                </span>
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
        <div>{{newColor}}</div>
    `,
    styles: [
        "input.ng-invalid.ng-touched { border: 1px solid red; }",
        // "input + span { float:left; }",
        "input.ng-invalid.ng-touched ~ span { display:inline; }",
        "input ~ span { display:none; }",
    ],
})
export class ColorToolComponent {

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

        console.log(nextIndex);

        this.colors = this.colors.concat({
            id: nextIndex,
            name: this.newColor,
        });
    }


}
