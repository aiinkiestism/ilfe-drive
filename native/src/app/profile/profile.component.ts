import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";

@Component({
    selector: "profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
