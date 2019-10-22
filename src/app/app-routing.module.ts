import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'test-dialog', pathMatch: 'full' },
=======
  { path: '', redirectTo: 'test-clipboard', pathMatch: 'full' },
>>>>>>> 2e15ba40a97797bfac1895e25a436106be95bd9f
  {
    path: 'test-expand',
    loadChildren: () => import('./test-expand/test-expand.module').then(m => m.TestExpandModule)
  },
  {
    path: 'test-dialog',
    loadChildren: () => import('./test-dialog/test-dialog.module').then(m => m.TestDialogModule)
  },
  { path: 'test-clipboard', loadChildren: () => import('./test-clipboard/test-clipboard.module').then(m => m.TestClipboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
