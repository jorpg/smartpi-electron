import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import { PagesRoutes } from './pages.routes';

@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
