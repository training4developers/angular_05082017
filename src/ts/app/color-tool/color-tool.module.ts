import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ColorToolComponent } from "./components/color-tool.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ColorToolComponent, CapitalizePipe ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
