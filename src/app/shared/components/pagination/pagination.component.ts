import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() update: EventEmitter<Number> = new EventEmitter();
  counter = 0;
  constructor() { }

  ngOnInit() {
  }
  onClickIncreasePaginationCounter(event){
    this.counter++;
    console.log(this.counter);
    this.update.emit(this.counter);
  }
  onClickDecreasePaginationCounter(event){
    this.counter--;
    console.log(this.counter);
    this.update.emit(this.counter);
  }
}
