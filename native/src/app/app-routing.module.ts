import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(profileTab:profile/default//talkTab:talk/default//driveTab:drive//default/notificationTab:notification//default/timelineTab:timeline/default)",
        pathMatch: "full"
    },

    {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/profile/profile.module").then((m) => m.ProfileModule),
        outlet: "profileTab"
    },
    {
        path: "talk",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/talk/talk.module").then((m) => m.TalkModule),
        outlet: "talkTab"
    },
    {
        path: "drive",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/drive/drive.module").then((m) => m.DriveModule),
        outlet: "driveTab"
    },
    {
        path: "notification",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/notification/notification.module").then((m) => m.NotificationModule),
        outlet: "notificationTab"
    },
    {
        path: "timeline",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/timeline/timeline.module").then((m) => m.TimelineModule),
        outlet: "timelineTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
