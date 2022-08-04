import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkerComponent } from './pages/marker/marker.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'fullscreen', component: FullScreenComponent },
            { path: 'marker', component: MarkerComponent },
            { path: 'properties', component: PropertiesComponent },
            { path: 'zoom-range', component: ZoomRangeComponent },
            { path: '**', redirectTo: 'fullscreen' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MapsRoutingModule {}
