import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { StarComponent } from '../../shared/star.component';

@Component({
    templateUrl: '/products/product-detail/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    @Input() product: Product;
    errorMessage: string;

    constructor(private _productService: ProductService,
        private _router: Router,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            console.log(params["id"])
            let id = +params["id"];
            this.getProduct(id);
        })
    }

    getProduct(id: number) {
        // this._productService.getProduct(id)
        //     .subscribe(
        //     product => this.product = product,
        //     error => this.errorMessage = <any>error);

        this._productService.getProduct(id)
            .then(product => this.product = product)
    }

    onBack(): void {
        this._router.navigate(['products']);
    }

}
