import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'seed-welcome-screen',
    templateUrl: './welcome-screen.component.html',
    styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

    constructor(
        private router: Router) { }

    gettingStarted(): void {
        this.router.navigate(['/getting-started']);
    }

}
