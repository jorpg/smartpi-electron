import { Routes } from '@angular/router';
// app
import { WelcomeScreenComponent, GettingStartedComponent } from './components/index';


export const PagesRoutes: Routes = [
    {
        path: 'welcome-screen',
        component: WelcomeScreenComponent
    },
    {
        path: 'getting-started',
        component: GettingStartedComponent
    }
];
