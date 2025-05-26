import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';
import { SampleComponent } from './sample/sample.component';
import { MainproductsComponent } from './mainproducts/mainproducts.component';
import { employeelistGuard } from './employeelist.guard';
import { childguard } from './childguard.guard';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {
        path: '',
        component:LoginComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component:AppNavComponent,
        children: [
            {
                path:'home', component:HomeComponent,
            },
         
            {
                path:'child', component:ChildComponent
            },
            {
                path:'parent', component:ParentComponent,
            },
            {
                path:'usercard', component:UsercardComponent,
            },
            {
                path:'userlist', component:UserlistComponent,
            },
            {
                path:'productlist', component:ProductListComponent,
            },
            {
                path:'cart', component:CartComponent,
            },
            {
                path:'product', component:ProductComponent,
            },
            {
                path:'login', component:LoginComponent,
            },
            {
                path:'logout', component:LogoutComponent,
            },
            {
                path:'Details', component:DetailsComponent, canDeactivate:[childguard]
            },
            {
                path:'profile', component:ProfileComponent,
            },
            {
                path:'todo', component:TodoComponent,
            },
            {
                path:'sample', component:SampleComponent,
            },

            {
                path:'mainproducts', component:MainproductsComponent, canActivate: [employeelistGuard]
            },
            {
                path:'student', component:StudentComponent, 
            },

        ]
    }
    
];

