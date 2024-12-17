import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  standalone: false,
  
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  
  title = '';
  text = '';
  date_post!: Date;

  constructor() {}
  ngOnInit(): void {
    this.myDate$.subscribe(date => {this.date_post = date});
  }

  addPost() {
    if(this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: 0,
        date: this.date_post
      }
      this.onAdd.emit(post);
      console.log('New Post', post);
      this.title = this.text = '';
    }
  }

  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => obs.next(new Date()), 1000)
  });
}
