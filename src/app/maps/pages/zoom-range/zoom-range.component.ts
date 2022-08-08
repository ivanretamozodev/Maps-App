import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
    selector: 'app-zoom-range',
    templateUrl: './zoom-range.component.html',
    styleUrls: ['./zoom-range.component.scss'],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
    @ViewChild('divMap') divMap!: ElementRef;

    map!: mapboxgl.Map;

    zoomLevel: number = 10;
    latLong: [number, number] = [-74.925, 45.28];

    constructor() {}

    ngOnDestroy(): void {
        this.map.off('zoom', () => {});

        this.map.off('zoomend', () => {});

        this.map.off('move', () => {});
    }

    ngAfterViewInit(): void {
        this.map = new mapboxgl.Map({
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/ivan14445/cl6fkyeac001l14pl4w7kcfre',
            center: this.latLong,
            zoom: this.zoomLevel,
        });

        this.map.on('zoom', () => (this.zoomLevel = this.map.getZoom()));

        this.map.on('zoomend', () => {
            if (this.map.getZoom() >= 18) {
                this.map.zoomTo(18);
            }
        });

        //movements of the map

        this.map.on('move', (e) => {
            const target = e.target;
            const { lng, lat } = target.getCenter();
            this.latLong = [lng, lat];
        });
    }

    zoomIn() {
        this.map.zoomIn();
    }

    zoomOut() {
        this.map.zoomOut();
    }

    zoomChange(value: string) {
        this.map.zoomTo(Number(value));
    }
}
