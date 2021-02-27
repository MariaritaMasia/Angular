import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogSectionsComponent } from './blog-sections/blog-sections.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogSectionsComponent,
    BlogPostsComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
