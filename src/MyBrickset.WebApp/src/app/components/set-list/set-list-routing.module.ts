
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewSetComponent } from '../set-detail/view-set.component';
import { SetListComponent } from './set-list.component';
import { FilterPanelComponent, ViewCriteriaListComponent } from '../filter';

const setListRoutes: Routes = [
    {
        path: 'sets',
        component: SetListComponent,
        children: [
            {
                path: 'filter',
                component: FilterPanelComponent,
                children: [
                    {
                        path: ':id',
                        component: ViewCriteriaListComponent
                    }
                ]
            },
            {
                path: ':id',
                component: ViewSetComponent,
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(setListRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SetListRoutingModule { }