import { Component, OnInit, Input } from '@angular/core';
import{Quotes} from '../model/quotes' //import the quote class


@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {


  //dispaly  quote detailscomingfrom the parent componet (quote componet)
  //1.import input
  //2.declare the propert displaying quote details
  //3.register the child componet  inside the parent componet

  @Input() parentData:Quotes; //propery receiving the quote details from the parent component
  // @Input () counterData;  //property  upvote
  // @Input () decreaseCounter;


  constructor() { }

  ngOnInit(): void {

  }
  
}
