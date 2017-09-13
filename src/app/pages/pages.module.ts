import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';

@NgModule({
  imports: [
        CommonModule,
        PagesRoutingModule
  ],
    declarations: [WelcomeScreenComponent, GettingStartedComponent, NavSidebarComponent]
})
export class PagesModule { }
