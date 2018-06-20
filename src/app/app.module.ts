import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { GitFollowersService } from './services/git-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    DataService,
    GitFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
