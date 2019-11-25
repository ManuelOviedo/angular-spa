import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './layouts/landing-templates/index/index.component';
import { ErrorComponent } from './layouts/perma-templates/error/error.component';
import { SimpleContentComponent } from './layouts/landing-templates/simple-content/simple-content.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: IndexComponent },
  {path: 'home/:slug', component: SimpleContentComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'error/:slug', component: ErrorComponent },
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
