import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(timelineTab:timeline/default//searchTab:search/default//driveTab:drive/default//profileTab:profile/default)",
        pathMatch: "full"
    },

    {
        path: "timeline",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/timeline/timeline.module").then((m) => m.TimelineModule),
        outlet: "timelineTab"
    },
    {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
        outlet: "searchTab"
    },
    {
        path: "drive",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/drive/drive.module").then((m) => m.DriveModule),
        outlet: "driveTab"
    },
    {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/profile/profile.module").then((m) => m.ProfileModule),
        outlet: "profileTab"
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
