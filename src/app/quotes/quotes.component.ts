import { Component,OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  

  quote:any
 public dis:any
 res:any
content:any
author:any

  constructor(private ds:DataService){}
  
  
  

  ngOnInit(): void {
    

    this.ds.viewquote().subscribe((data:any)=>{
      
      console.log(data);
      this.quote=data;
      
    })
    
  }

  display(text:any){
    this.dis=text
    console.log(text);
    
    }

    load(){
      this.ds.choosequote(this.dis).subscribe((data:any)=>{
        // console.log(data);
        
        this.content=data.content
        this.author=data.author
        // this.res=(this.content + this.author)
        console.log(this.res);
        

      })
    }
  
  

  
}
