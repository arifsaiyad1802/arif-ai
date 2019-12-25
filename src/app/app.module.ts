import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PollDetailComponent} from './dialogues/poll-detail/poll-detail.component';
import {MatDialogModule, MatButtonModule, MatTableModule, MatInputModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        PollDetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule
    ],
    providers: [],
    entryComponents: [PollDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
