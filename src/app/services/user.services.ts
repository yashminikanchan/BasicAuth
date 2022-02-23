import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
    providedIn: 'root',
})

export class UserServices {

    private userUrl = 'http://localhost:3000/api/loginUser/'

    constructor(private httpClient: HttpClient) { }

    getUser(userDetails: any): Observable<any> {

        let userData = this.userUrl + "login" + "/" + userDetails.userName + "/" + userDetails.password;
        return this.httpClient.get<any>(userData);
    }
    createUser(userList: any): Observable<any> {
        let userData = this.userUrl + "createUser";
        return this.httpClient.post<any>(userData, userList);

    }
    getAllUser(): Observable<any> {
        let userData = this.userUrl + "findAllUser";
        return new Observable(obs => {
            this.httpClient.get<any>(userData).subscribe((userList) => {
                obs.next(userList[0].id);
            });
        })

    }

    deleteUser(id: any): Observable<any> {
        let userData = this.userUrl +"deleteUserbyId"+"/"+id;
        return this.httpClient.delete<any>(userData);
    }

}