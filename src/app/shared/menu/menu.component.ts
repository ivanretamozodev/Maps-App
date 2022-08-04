import { Component, OnInit } from '@angular/core';

interface MenuItem {
    route: string;
    name: string;
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    menuItems: MenuItem[] = [
        {
            route: '/maps/fullscreen',
            name: 'FullScreen',
        },
        {
            route: '/maps/zoom-range',
            name: 'Zoom Range',
        },
        {
            route: '/maps/marker',
            name: 'Markers',
        },
        {
            route: '/maps/properties',
            name: 'Properties',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
