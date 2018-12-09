import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
      console.log(this.posts.slice(0, 1));
    });
  }

  ngOnInit() {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post['id'] = response.json();
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }

  updatePost(post) {
    console.log(post.id);
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json());
      });
  }
}
