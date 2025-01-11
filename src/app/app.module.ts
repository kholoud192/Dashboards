import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { CareComponent } from './components/care/care.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeadershipComponent,
    CareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
