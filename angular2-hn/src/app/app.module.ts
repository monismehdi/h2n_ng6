import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import { HackernewsApiService } from './hackernews-api.service';

import { HttpModule } from '@angular/http';
import { MomentModule } from 'ngx-moment';

import { DomainPipe } from './domain.pipe';
// import { Domain } from 'domain';

// import { MdButtonModule } from '@angular6-material/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
     HttpModule,
      MomentModule
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
