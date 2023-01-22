import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  @Input() qdata: String | undefined // Capitalize Input!
  @Input() qdata2:String |undefined

  @Output() quo=new EventEmitter()

  
constructor(){
  // this.quo.emit(this.qdata)
  // console.log(this.qdata);

  // this.content=this.qdata
  
}



}
