import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user.services';

@Component({
    selector: 'frontpage',
    templateUrl: './frontpage.component.html',
    styleUrls: ['./frontpage.component.css']
})
export class FrontPageComponent implements OnInit {

    userName: any = "";
    password: any = "";
    userDetails: any = "";


    constructor(private router: Router,
        private userServices: UserServices) { }

    ngOnInit(): void {


    }

    onSubmitClick() {
        console.log(this.userName);
        let userDetails = { userName: this.userName, password: this.password }
        this.userServices.getUser(userDetails).subscribe((userData) => {

            console.log(userData);


            if (this.password) {
                this.router.navigate(['/customer']);
            } else {
                alert("Please Enter Password")
            }


            // this.password = "";
            // this.userName = "";
        });

    }
    onDeleteClick() {

        this.userServices.getAllUser().subscribe((id) => {

            this.userServices.deleteUser(id).subscribe((userData) => {
                console.log("deleted!!");

            });
        });

    }

    onTextClick() {
        this.router.navigate(['/user']);
    }

}