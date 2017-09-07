import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// app
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        WelcomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
