// angular 2 module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modal module
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from './products/product-modal/custom-modal.component';

// paging module
import { Ng2PaginationModule } from 'ng2-pagination';

// routing module
import { routing } from './app.routing.module';

//spinkit component
import {CubeGridComponent} from 'ng2-spin-kit/app/spinners'

// component
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { StarComponent } from './shared/star.component'
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { ProduceDetailModal } from './products/product-detail-modal/product-detail-modal.component';
import {TestSignalRComponent} from './test-signalr/test-signalr.component';

// service
import { ProductService } from './products/shared/product.service';

// pipe
import { ProductFilterPipe } from './products/product-filter/product-filter.pipe'





@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        Ng2PaginationModule],


    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, ProductService],


    declarations: [AppComponent,
        BookListComponent,
        BookDetailComponent,
        WelcomeComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe,
        StarComponent,
        ProductModalComponent,
        CustomModal,
        ProduceDetailModal,
        CubeGridComponent,
        TestSignalRComponent],


    bootstrap: [AppComponent],


    entryComponents: [CustomModal, ProduceDetailModal]
})
export class AppModule { }