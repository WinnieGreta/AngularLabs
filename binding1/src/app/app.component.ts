import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    name = "Tom";
    age = 25;
    colspan = 2;
    count: number = 0;
    count_2: number = 0;

    increase(): void {
        this.count++;
    }

    increase_2($event: any): void {
        this.count_2++;
        console.log($event);
    }
}