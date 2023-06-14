import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingComponent, title: 'Home' },
  { path: 'home', component: LandingComponent, title: 'Home' },
  {
    path: 'products',
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  { path: '**', component: NotFoundComponent, title: '404 Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
