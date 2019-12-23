import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DriveRoutingModule } from "./drive-routing.module";
import { DriveComponent } from "./drive.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DriveRoutingModule
    ],
    declarations: [
        DriveComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DriveModule { }
