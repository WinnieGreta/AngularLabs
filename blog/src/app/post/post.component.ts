import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  standalone: false,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() myPost!:Post;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {}

  removePost() {
    this.onRemove.emit(this.myPost.id);
  }
  
  ngOnInit(): void {
    if(!this.myPost.date) {
      this.myPost.date = new Date()
    }
  }
  ngOnDestroy(): void {
    console.log('ngOnDestry called');
  }
}
