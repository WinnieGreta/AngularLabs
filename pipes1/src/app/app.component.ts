import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

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
    num: number = 15.45;
    phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Samsung A52', 'Idol S4'];
    phone: Observable<string>|undefined;
    constructor() { this.showPhones(); }
    showPhones() {
        this.phone = interval(500).pipe(map((i:number) => this.phones[i]));
    }
}
