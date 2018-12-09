import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() change = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isActive = !this.isActive;
    this.change.emit({ newValue: this.isActive });
  }
}

export interface likesEventArgs {
  newValue: boolean;
}
