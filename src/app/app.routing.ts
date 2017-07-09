
import {ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {UserEditComponent} from './user-edit/user-edit.component';

export const routes: Routes=[
    {
            path:'',
            redirectTo:'admin',
            pathMatch:'full'
        },

        {
            path:'admin',
            component:AdminComponent
        },

        {
            path:'users',
            component:UserComponent,
            children:[
                {
                    path:'id',
                    component:UserEditComponent
                }
            ]
        }

];





export const routing: ModuleWithProviders=RouterModule.forRoot(routes);