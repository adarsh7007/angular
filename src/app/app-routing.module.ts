import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuNoteModule } from './menu-note/menu-note.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./menu-note/menu-note.module').then(m => m.MenuNoteModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
