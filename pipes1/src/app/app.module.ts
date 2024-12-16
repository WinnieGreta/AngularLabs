import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormatPipe } from './format.pipe';
import { JoinPipe } from './join.pipe';
import { SqRootPipe } from './sqroot.pipe';
import { ImpureJoinPipe } from './impurejoin.pipe';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, FormatPipe, JoinPipe, SqRootPipe, ImpureJoinPipe ],
    bootstrap: [AppComponent]
})
export class AppModule {}