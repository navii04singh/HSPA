import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-property-card',
        templateUrl: 'property-card.component.html',
        styleUrls: ['property-card.component.css']
    }
)
export class PropertyCardComponent {

    Property : any = {
        "ID" : 1,
        "Name" : "Saini's House",
        "Type" : "House",
        "Price" : 12000
    }
}