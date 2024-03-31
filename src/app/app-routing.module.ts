import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'mihir',
    loadChildren: () => import('./pages/mihir/mihir.module').then( m => m.MihirPageModule)
  },
  {
    path: 'harshil',
    loadChildren: () => import('./pages/harshil/harshil.module').then( m => m.HarshilPageModule)
  },
  {
    path: 'rushi',
    loadChildren: () => import('./pages/rushi/rushi.module').then( m => m.RushiPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}