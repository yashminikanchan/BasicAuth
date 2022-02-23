import { Component, OnInit } from '@angular/core';
import { CustomerServices } from '../services/customer.services';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    selectedCustomer: any = "";
    customerName: any = "";
    customerId: any = "";
    customerAddress: any = "";
    product: any = "";
    quantity: any = "";
    customerList: any = [];

    id: any = "";

    constructor(private customerServices: CustomerServices) { }

    ngOnInit(): void {
        this.onGetCustomer();

    }
    onGetCustomer() {
        this.customerServices.getCustomers().subscribe((customerDetails) => {
            this.customerList = [];
            for (let index = 0; index < customerDetails.length; index++) {
                const element = customerDetails[index];
                element.isUpdateVisible = false;
                this.customerList.push(element);
            }
            console.log(this.customerList);

        });
    }

    onAddClick() {
        let customerDetails = { customerName: this.customerName, customerId: this.customerId, customerAddress: this.customerAddress, product: this.product, quantity: this.quantity }

        this.customerServices.postCustomers(customerDetails).subscribe((customerListDetails) => {
            // this.customerList = customerListDetails;
            console.log(this.customerList);
            this.onGetCustomer();
        });
        this.customerName = "";
        this.customerId = "";
        this.customerAddress = "";
        this.product = "";
        this.quantity = "";

    }

    onEditClick(customer: any) {

        customer.isUpdateVisible = true;
        this.selectedCustomer = customer;
        this.customerName = customer.customerName;
        this.customerId = customer.customerId;
        this.customerAddress = customer.customerAddress;
        this.product = customer.product;
        this.quantity = customer.quantity;
    }
    onUpdateClick(customer: any) {
        customer.isUpdateVisible = false;
        this.selectedCustomer = customer;
        let customerDetails = { customerName: this.customerName, customerId: this.customerId, customerAddress: this.customerAddress, product: this.product, quantity: this.quantity }
        this.id = customer.id;
        this.customerServices.putCustomers(this.id, customerDetails).subscribe((customerDetails) => {
            this.onGetCustomer();
        });
        this.customerName = customer.customerName;
        this.customerId = customer.customerId;
        this.customerAddress = customer.customerAddress;
        this.product = customer.product;
        this.quantity = customer.quantity;
    }



    onDeleteAllClick() {
        alert('Are you sure you want to delete all');
        this.customerServices.deleteAllCustomers().subscribe((allCustomerRemoved) => {
            this.onGetCustomer();
        });
        // this.customerList.splice(this.customerList[index], 1);


    }
    onDeleteClick(customer: any) {
        alert('Are you sure you want to delete');
        // this.id = this.customerList[index].id;
        // console.log(this.id);
        this.selectedCustomer = customer;
        this.customerServices.deleteCustomers(customer).subscribe((customerRemoved) => {
            this.onGetCustomer();
        });
    }
}