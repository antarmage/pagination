import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ApiServicesService } from './shared/services/api-services.service';
import { StaticDataService } from './shared/services/static-data.service';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginationComponent,
    CreateNewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiServicesService,StaticDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
