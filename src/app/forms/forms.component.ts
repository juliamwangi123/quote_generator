import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import{Quotes} from '../model/quotes'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  //create a new quote object from the quote class

  newquote = new Quotes("", "", "",0, 0);
// sending this to the parent component  1.import output & eventEmiiter  
//2.create an output from the  inbuilt evetEmitter
  @Output() customQuote = new EventEmitter<Quotes>() //dont quite get this

  constructor() { }

  ngOnInit(): void {
  }

  //3.a method that is sent with the data to the parent component

  sendQouteToParent(){
    this.customQuote.emit(this.newquote)
  }

}
