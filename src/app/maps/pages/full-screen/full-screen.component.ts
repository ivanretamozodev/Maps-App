import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
    selector: 'app-full-screen',
    templateUrl: './full-screen.component.html',
    styleUrls: ['./full-screen.component.scss'],
})
export class FullScreenComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/ivan14445/cl6fkyeac001l14pl4w7kcfre',
            center: [-74.925, 45.28],
            zoom: 3,
        });
    }
}
