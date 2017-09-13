import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seed-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

    constructor(private router: Router) {}

    viewAngular(): void {
      this.router.navigate(['/welcome-screen']);
    }

}
