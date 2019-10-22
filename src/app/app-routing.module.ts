import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'test-dialog', pathMatch: 'full' },
  {
    path: 'test-expand',
    loadChildren: () => import('./test-expand/test-expand.module').then(m => m.TestExpandModule)
  },
  {
    path: 'test-dialog',
    loadChildren: () => import('./test-dialog/test-dialog.module').then(m => m.TestDialogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
