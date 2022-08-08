import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { map } from 'rxjs';

interface markerColor {
    color: string;
    marker?: mapboxgl.Marker;
    center?: [number, number];
}

@Component({
    selector: 'app-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss'],
})
export class MarkerComponent implements AfterViewInit {
    @ViewChild('divMap') divMap!: ElementRef;
    map!: mapboxgl.Map;
    zoomLevel: number = 15;
    latLong: [number, number] = [-74.925, 45.28];
    markers: markerColor[] = [];

    constructor() {}

    ngAfterViewInit(): void {
        this.map = new mapboxgl.Map({
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/ivan14445/cl6fkyeac001l14pl4w7kcfre',
            center: this.latLong,
            zoom: this.zoomLevel,
        });

        this.readLocalStorage();
    }

    goToMarker(marker: mapboxgl.Marker) {
        const latLong = marker.getLngLat();
        this.map.flyTo({
            center: latLong,
        });
    }

    addMarker() {
        const color = '#xxxxxx'.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
        const marker = new mapboxgl.Marker({
            draggable: true,
            color,
        })
            .setLngLat(this.latLong)
            .addTo(this.map);

        this.markers.push({
            color,
            marker,
        });

        this.saveMarkerInStorage();
    }

    saveMarkerInStorage() {
        const lngLatArr: markerColor[] = [];

        this.markers.forEach((m) => {
            const color = m.color;
            const { lng, lat } = m.marker!.getLngLat();
            lngLatArr.push({
                color,
                center: [lng, lat],
            });
        });

        localStorage.setItem('markers', JSON.stringify(lngLatArr));
    }

    readLocalStorage() {
        if (!localStorage.getItem('markers')) {
            return;
        }
        const lnglatArr: markerColor[] = JSON.parse(localStorage.getItem('markers')!);

        lnglatArr.forEach((m) => {
            const newMarker = new mapboxgl.Marker({
                color: m.color,
                draggable: true,
            })
                .setLngLat(m.center!)
                .addTo(this.map);

            this.markers.push({
                marker: newMarker,
                color: m.color,
            });
        });
    }
}
