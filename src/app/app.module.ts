import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service'; 

import { ConsumerService }  from './consumer.service';

import { PresenterComponent } from './presenter.component';


@NgModule({
  declarations: [
    PresenterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ConsumerService],
  bootstrap: [PresenterComponent]
})
export class AppModule { }
