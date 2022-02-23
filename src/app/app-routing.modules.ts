import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FrontPageComponent } from './frontpage/frontpage.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
    { path: 'frontpage', component: FrontPageComponent },
    { path: 'user', component: UserComponent },
    { path: 'customer', component: CustomerComponent },
    { path: '', redirectTo: '/frontpage', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})



export class AppRoutingModule { }
