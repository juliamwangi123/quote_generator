import { Component, OnInit } from '@angular/core';
import{Quotes} from '../../model/quotes' //import the quote class

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  toDisplay = false;
//create an ampty array from the Quote class
  quotes:Quotes[] =[];

  //counter to be dispalayed  by the child component

  
  

  constructor() { }

  ngOnInit(): void {
    this.quotes =[
      new Quotes("Dont Be Afraid to Suck at Something New", "jules Mwangi", "Jabal Maina",0, 0 ),
      new Quotes("Dont Be Afraid to Suck at Something New", "jules Mwangi", "Jabal Maina", 0, 0)
    ]
  }



//upvote
 upVote(id){
 this.quotes[id].upCounter++

 }
//downvote

downVote(id){
  this.quotes[id].downCounter--
}



  //button to toggle the quote details to show and hide form

  


  
//
  customQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  deleteQuote(id){
    this.quotes= this.quotes.filter((element, index)=>{
         return id !==index
     })
  }

 toggleShow(){
   this.toDisplay =!this.toDisplay
 }

}
