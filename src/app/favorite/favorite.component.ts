import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isSelected: boolean;
  @Output('change') change = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteEventArgs {
  newValue: boolean;
}
