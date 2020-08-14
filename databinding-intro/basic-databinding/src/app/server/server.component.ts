import { Component} from '@angular/core';

//a decorator
@Component({
    //arbitrary component name -- app-<component-name>
    selector: 'app-server',
    //relative path to the html file (view)
    templateUrl: './server.component.html'

})

export class ServerComponent {

}