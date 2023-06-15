import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AuthMiddlewareGuard } from './auth-middleware.guard';

const routes: Routes = [
  { path: '', component: LandingComponent, title: 'Home' },
  { path: 'home', component: LandingComponent, title: 'Home' },
  {
    path: 'products',
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule),
    data: { applyPreload: true },
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthMiddlewareGuard],
  },
  { path: '**', component: NotFoundComponent, title: '404 Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
