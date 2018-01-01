import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { CreateNewPostComponent }   from './create-new-post/create-new-post.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'create-new-post', component: CreateNewPostComponent },
  ];
   
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}