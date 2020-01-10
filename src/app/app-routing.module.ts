import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginPage } from './login/login.page';
import { MenuPage } from './components/menu/menu.page';
import { DeviceselectComponent } from './components/deviceselect/deviceselect.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:LoginPage},
  { path: 'producto', component:MenuPage},

  { path: 'dash', component: DashboardComponent },
  { path: 'prod', component: ProductoComponent },
  { path: 'select', component: DeviceselectComponent },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
