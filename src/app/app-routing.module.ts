import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'test-double-dialog', pathMatch: 'full' },
  {
    path: 'test-expand',
    loadChildren: () => import('./test-expand/test-expand.module').then(m => m.TestExpandModule)
  },
  {
    path: 'test-dialog',
    loadChildren: () => import('./test-dialog/test-dialog.module').then(m => m.TestDialogModule)
  },
  { path: 'test-clipboard', loadChildren: () => import('./test-clipboard/test-clipboard.module').then(m => m.TestClipboardModule) },
  { path: 'test-double-dialog',
  loadChildren: () => import('./test-double-dialog/test-double-dialog.module').then(m => m.TestDoubleDialogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
