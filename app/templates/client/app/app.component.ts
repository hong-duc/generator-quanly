import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { Route, RouterModule} from '@angular/router';


import { ProductService } from './products/shared/product.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}


