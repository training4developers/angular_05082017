import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { ColorToolComponent } from "./components/color-tool.component";
import { ColorFormComponent } from "./components/color-form.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { EllipsisPipe } from "./pipes/ellipsis.pipe";

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, SharedModule ],
    declarations: [
        ColorToolComponent,
        ColorFormComponent,
        CapitalizePipe,
        EllipsisPipe,
    ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
