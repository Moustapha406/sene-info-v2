import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Seneinfov2SharedModule } from 'app/shared/shared.module';
import { Seneinfov2CoreModule } from 'app/core/core.module';
import { Seneinfov2AppRoutingModule } from './app-routing.module';
import { Seneinfov2HomeModule } from './home/home.module';
import { Seneinfov2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Seneinfov2SharedModule,
    Seneinfov2CoreModule,
    Seneinfov2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Seneinfov2EntityModule,
    Seneinfov2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Seneinfov2AppModule {}
