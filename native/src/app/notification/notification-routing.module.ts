import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NotificationComponent } from "./notification.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

const routes: Routes = [
    { path: "default", component: NotificationComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NotificationRoutingModule { }
