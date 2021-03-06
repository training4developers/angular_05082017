import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "./shared/shared.module";
import { ColorToolModule } from "./color-tool/color-tool.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [ BrowserModule, SharedModule, ColorToolModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
