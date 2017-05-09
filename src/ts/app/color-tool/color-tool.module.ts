import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ColorToolComponent } from "./components/color-tool.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { EllipsisPipe } from "./pipes/ellipsis.pipe";

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ ColorToolComponent, CapitalizePipe, EllipsisPipe ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
