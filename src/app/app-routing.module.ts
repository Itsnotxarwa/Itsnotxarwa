import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SuppliersDetailsComponent } from './suppliers/suppliers-details/suppliers-details.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
 

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'suppliers', component: SuppliersComponent, children: [
    {path: '', component: SuppliersListComponent},
    {path:':id', component: SuppliersDetailsComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
