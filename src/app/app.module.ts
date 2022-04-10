import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './componets/quote/quote.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { FormsComponent } from './forms/forms.component';
import { HighestUpvoteDirective } from './highest-upvote.directive';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotedetailsComponent,
    FormsComponent,
    HighestUpvoteDirective,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
