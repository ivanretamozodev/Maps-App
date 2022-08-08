export interface Properties {
    title: string;
    description: string;
    lngLat: [number, number];
}

export interface markerColor {
    color: string;
    marker?: mapboxgl.Marker;
    center?: [number, number];
}
