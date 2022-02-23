import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user.services';


@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    userName: any = "";
    password: any = "";
    cpassword: any = "";
    userDetails: any = "";

    constructor(private router: Router,
        private userServices: UserServices) { }

    ngOnInit(): void {

    }

    onSubmitClick() {
        if (this.password == this.cpassword) {
            alert("Account Created");
            this.userDetails = { userName: this.userName, password: this.password }

            this.userServices.createUser(this.userDetails).subscribe((userData) => {
                this.userDetails = userData;
                console.log(this.userDetails);

            });
            this.router.navigate(['/frontpage']);

        } else {
            alert("Incorrected Entered Password");
        }



    }


}