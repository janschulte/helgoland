import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeseriesService } from './services/timeseries.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolboxModule } from './../toolbox/toolbox.module';
import { TimeseriesDiagramComponent } from './diagram/diagram.component';
import { TimeseriesListSelectionComponent } from './list-selection/list-selection.component';
import { TimeseriesMapSelectionComponent } from './map-selection/map-selection.component';
import { TimeseriesNavigationComponent } from './navigation/navigation.component';
import { TimeseriesProviderSelectionComponent } from './provider-selection/provider-selection.component';
import { TimeseriesProviderSelectionService } from './provider-selection/provider-selection.service';

const timeseriesRoutes: Routes = [
  {
    path: 'timeseries',
    component: TimeseriesNavigationComponent,
    children: [
      {
        path: 'diagram',
        component: TimeseriesDiagramComponent
      },
      {
        path: 'map-selection',
        component: TimeseriesMapSelectionComponent
      },
      {
        path: 'list-selection',
        component: TimeseriesListSelectionComponent
      },
      {
        path: 'provider',
        component: TimeseriesProviderSelectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ToolboxModule,
    RouterModule.forRoot(
      timeseriesRoutes
      // { enableTracing: true }
    ),
    NgbModule
  ],
  declarations: [
    TimeseriesNavigationComponent,
    TimeseriesDiagramComponent,
    TimeseriesListSelectionComponent,
    TimeseriesMapSelectionComponent,
    TimeseriesProviderSelectionComponent
  ],
  providers: [
    TimeseriesProviderSelectionService,
    TimeseriesService
  ]
})
export class TimeseriesModule { }
