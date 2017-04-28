import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VoteComponent } from './vote/vote.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  { path: 'vote', component: VoteComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: 'vote', pathMatch: 'full' }
  //{ path: 'home', component: AppComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VoteComponent,
    ResultComponent
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
