import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input('customer') customer?: any;
    
    @Output() onEditClickRequest = new EventEmitter<string>()
    @Output() onDeleteClickRequest = new EventEmitter<string>()
    @Output() onUpdateClickRequest = new EventEmitter<string>()

    onUpdateClick(customer: any) {
        this.onUpdateClickRequest.emit(customer);
    }
    onEditClick(customer: any) {
        this.onEditClickRequest.emit(customer);
    }
    onDeleteClick(customer: any) {
        this.onDeleteClickRequest.emit(customer)
    }

} 