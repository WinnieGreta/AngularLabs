import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [HttpService]
})
export class AppComponent implements OnInit {
    users: Observable<Object>|undefined;
    constructor(private httpService: HttpService) { }
    ngOnInit(): void{
        this.users = this.httpService.getUsers();
    }
}