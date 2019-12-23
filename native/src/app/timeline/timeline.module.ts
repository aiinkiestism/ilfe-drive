import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TimelineRoutingModule } from "./timeline-routing.module";
import { TimelineComponent } from "./timeline.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TimelineRoutingModule
    ],
    declarations: [
        TimelineComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TimelineModule { }
