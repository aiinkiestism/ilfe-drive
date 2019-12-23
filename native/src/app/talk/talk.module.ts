import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TalkRoutingModule } from "./talk-routing.module";
import { TalkComponent } from "./talk.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TalkRoutingModule
    ],
    declarations: [
        TalkComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TalkModule { }
