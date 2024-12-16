import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    myDate = new Date(1961, 3, 12);
    welcome: string = "hello world";
    percentage: number = 0.14;
    myNewDate = Date.now();
    pi: number = 3.1415;
    money: number = 23.45;
    message = "Merry Christmas and Happy New Year";
    x: number = 15.45;
    users = ['Tom', 'Jess', 'Kate', 'Des', 'Clay'];
    a: number = 4;
    b: number = 7;
    c: number = -10;
}
