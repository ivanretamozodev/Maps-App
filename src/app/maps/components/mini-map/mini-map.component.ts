import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
    selector: 'app-mini-map',
    templateUrl: './mini-map.component.html',
    styleUrls: ['./mini-map.component.scss'],
})
export class MiniMapComponent implements AfterViewInit {
    @Input() lnglat: [number, number] = [0, 0];
    @ViewChild('minimap') divMiniMap!: ElementRef;

    constructor() {}

    ngAfterViewInit(): void {
        const map = new mapboxgl.Map({
            container: this.divMiniMap.nativeElement,
            style: 'mapbox://styles/ivan14445/cl6fkyeac001l14pl4w7kcfre',
            center: this.lnglat,
            zoom: 15,
            interactive: false,
        });

        new mapboxgl.Marker().setLngLat(this.lnglat).addTo(map);
    }
}
