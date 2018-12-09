import { FavoriteEventArgs } from './favorite/favorite.component';
import { likesEventArgs } from './likes/likes.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isSelected: false
  };
  likes = {
    count: 0,
    isActive: false
  };

  showOnScreen: boolean;

  canSave: boolean = true;

  task: {} = {
    title: 'Review Applications',
    assignee: null
  };

  onFavoriteChange(eventArgs: FavoriteEventArgs) {
    console.log('Favorite Changed: ', eventArgs);
  }

  onLikesChange(eventArgs: likesEventArgs) {
    console.log('Likes Changed', eventArgs);
    this.likes.isActive = !this.likes.isActive;
    this.likes.isActive ? (this.likes.count = 1) : (this.likes.count = 0);
  }

  onShowOnScreen() {
    this.showOnScreen = !this.showOnScreen;
  }
}
