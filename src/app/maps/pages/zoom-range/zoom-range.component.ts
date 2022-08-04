import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
    selector: 'app-zoom-range',
    templateUrl: './zoom-range.component.html',
    styleUrls: ['./zoom-range.component.scss'],
})
export class ZoomRangeComponent implements AfterViewInit {
    @ViewChild('divMap') divMap!: ElementRef;

    map!: mapboxgl.Map;

    constructor() {}

    ngAfterViewInit(): void {
        this.map = new mapboxgl.Map({
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.925, 45.28],
            zoom: 18,
        });
    }

    zoomIn() {
        this.map.zoomIn();
    }

    zoomOut() {
        this.map.zoomOut();
    }
}
