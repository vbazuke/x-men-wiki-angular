import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbrotron.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AbilityCardsComponent } from './ability-cards/ability-cards.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    JumbotronComponent,
    AbilityCardsComponent,
    CarouselComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
