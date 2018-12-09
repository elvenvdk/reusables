import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { catchError } from 'rxjs/operators';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http
      .post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  updatePost(post) {
    return this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
  }

  deletePost(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput(error.json()));
    if (error.status === 404) return throwError(new NotFoundError());
    return throwError(new AppError(error));
  }
}
