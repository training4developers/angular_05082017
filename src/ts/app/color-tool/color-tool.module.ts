import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { SharedModule } from "../shared/shared.module";

import { ColorsService } from "./services/colors.service";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { EllipsisPipe } from "./pipes/ellipsis.pipe";

import { ColorToolComponent } from "./components/color-tool.component";
import { ColorFormComponent } from "./components/color-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SharedModule,
    ],
    declarations: [
        ColorToolComponent,
        ColorFormComponent,
        CapitalizePipe,
        EllipsisPipe,
    ],
    exports: [ ColorToolComponent ],
    providers: [ ColorsService ],
})
export class ColorToolModule { }
