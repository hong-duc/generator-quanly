import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {CustomModal,CustomModalContext} from './custom-modal.component';


@Component({
    selector: 'modal',
    templateUrl: '/products/product-modal/product-modal.component.html',
    providers: [Modal]
})
export class ProductModalComponent {

    constructor(
        public modal: Modal
    ) {
        
    }


    onClick() {
        return this.modal.open(CustomModal,overlayConfigFactory({num1: 2, num2: 3},BSModalContext))   
    }

}