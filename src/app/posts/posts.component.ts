import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
      console.log(this.posts.slice(0, 1));
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      response => {
        post['id'] = response.json();
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
        } else throw error;
      }
    );
  }

  updatePost(post) {
    console.log(post.id);
    this.service.updatePost(post).subscribe(response => {
      console.log(response.json());
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let idx = this.posts.indexOf(post);
        this.posts.splice(idx, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted');
        else throw error;
      }
    );
  }
}
