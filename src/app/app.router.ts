import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { VazhipadComponent } from './vazhipad/counter/vazhipad';
import { NgModule } from '@angular/core';
import { HeroesComponent }      from './hero/hero';
import {AddstockitemComponent} from './vazhipad/stock/add_stock_item';
import { Manage_mainComponent } from './vazhipad/manage/main_page';
import { AddnewproductComponent } from './vazhipad/manage/add_new_product';
import { UpdatestockitemComponent } from './vazhipad/stock/update_stock_item';
import {AddnewvazhipadComponent} from './vazhipad/manage/add_new_vazhipad';
export const routes: Routes = [ 
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent},
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'vazhipad', component: VazhipadComponent },
  {path: 'add_stock_item', component: AddstockitemComponent },
    {path: 'update_stock_item', component: UpdatestockitemComponent },
    {path: 'add_vazhipad', component: AddnewvazhipadComponent },
   {path: 'mange_main', component: Manage_mainComponent },
   {path: 'add_new_product', component: AddnewproductComponent }
  
  
   
  
      
];
@NgModule({
 
  imports: [ RouterModule.forRoot(routes, { useHash : true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
