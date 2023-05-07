import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'o-kompanii',
    loadChildren: () =>
      import('./areas/about/about.module').then((file) => file.AboutModule)
  },
  {
    path: 'katalog',
    loadChildren: () =>
      import('./areas/catalog/catalog.module').then((file) => file.CatalogModule)
  },
  // {
  //   path: 'gotovye-resheniya'
  // },
  // {
  //   path: 'kupit-optom'
  // },
  // {
  //   path: 'o-dymohodah'
  // },
  // {
  //   path: 'prajs-list'
  // },
  // {
  //   path: 'sotrudnichestvo'
  // },
  // {
  //   path: 'kontakty'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
