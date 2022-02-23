import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CustomerServices {

    private customerUrl = 'http://localhost:3000/api/customers/'

    constructor(private httpClient: HttpClient) { }

    getCustomers(): Observable<any> {
        let customerData = this.customerUrl + "findall";
        return this.httpClient.get<any>(customerData);

    }

    postCustomers(customerListDetails): Observable<any> {
        let createCustomer = this.customerUrl + 'createcustomer'
        return this.httpClient.post<any>(createCustomer, customerListDetails);
    }

    deleteAllCustomers() {
        let removeCustomer = this.customerUrl + "deleteall";
        return this.httpClient.delete<any>(removeCustomer);
    }

    deleteCustomers(customer:any) {
        let removeCustomer = this.customerUrl + "deleteCustomer/"+customer.id;
        return this.httpClient.delete<any>(removeCustomer);
    }

    putCustomers(id: any, customerDetails:any) {
        let updateCustomerURL = this.customerUrl + "updateCustomer/"+id;
        return this.httpClient.put<any>(updateCustomerURL, customerDetails );
    }

}