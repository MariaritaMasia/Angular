import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // path: '', loadChildren:() => import("./features/personal/personal.module").then(m => m.PersonalModule),
    path: '', loadChildren:() => import("./features/blog/blog.module").then(m => m.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
