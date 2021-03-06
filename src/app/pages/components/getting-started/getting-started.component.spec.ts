import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { GettingStartedComponent } from './getting-started.component';
import { NgxElectronService } from '../../../ngx-electron/ngx-electron.service';

@Component({
    selector: 'seed-nav-sidebar',
    template: ``
})
class Mocknav-sidebarComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() linkText: string;
}

describe('GettingStartedComponent', () => {
    let component: GettingStartedComponent;
    let fixture: ComponentFixture<GettingStartedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GettingStartedComponent,
                Mocknav-sidebarComponent
            ],
            providers: [
                { provide: NgxElectronService, useValue: {}}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GettingStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
