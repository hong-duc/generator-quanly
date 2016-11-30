import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/shared/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import {TestSignalRComponent} from './test-signalr/test-signalr.component';

const appRoutes: Route[] = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'book-list', component: BookListComponent },
    { path: 'book-detail', component: BookDetailComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    // { path: 'product/:id', component: ProductDetailComponent },
    { path: 'test-modal', component: ProductModalComponent },
    { path: 'test-signalr', component: TestSignalRComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);