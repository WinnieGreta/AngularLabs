import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
  date?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  posts: Post[] = [{title: 'Learning Components', text: 'Creating project', id: 1}, {title: 'Learning Directives', text: 'Still creating project', id: 2}];
  search = '';

  updatePosts(post: Post) {
    if (this.posts.length !== 0) {
      post.id = Math.max(...this.posts.map(p => p.id)) + 1;
    }
    this.posts.unshift(post);
  }
  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  transform(posts: Post[], search: string=''): Post[] {
    if(!search.trim()){
      return posts;
    }
    return posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
  }
}
