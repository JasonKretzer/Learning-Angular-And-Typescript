import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverCreationStatus = "No Server Created!";
    serverName = 'Test Server';
    serverCreated = false;
    servers = ['TestServer1', 'TestServer2', 'TestServer3'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        } ,2000);
     }

    ngOnInit(): void {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
    }

    //event is passed as $event in the html
    onUpdateServerName(event: any) {
        this.serverName = event.target.value;
    }

}
