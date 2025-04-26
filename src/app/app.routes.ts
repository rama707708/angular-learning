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
         

        ]
    }
    
];

