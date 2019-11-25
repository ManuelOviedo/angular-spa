import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InitializerService } from './util/services/app/initializer.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layouts/perma-templates/header/header.component';
import { FooterComponent } from './layouts/perma-templates/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './layouts/landing-templates/index/index.component';
import { ErrorComponent } from './layouts/perma-templates/error/error.component';
import { SimpleContentComponent } from './layouts/landing-templates/simple-content/simple-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent,
    SimpleContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InitializerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
