import { Component} from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

//a decorator
@Component({
    //arbitrary component name -- app-<component-name>
    selector: 'app-server',
    //relative path to the html file (view)
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}