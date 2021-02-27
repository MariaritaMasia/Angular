import { Component, OnInit } from '@angular/core';
import { BlogSection } from 'src/app/models/interfaces/blog-section.interface';

@Component({
  selector: 'kuma-blog-sections',
  templateUrl: './blog-sections.component.html',
  styleUrls: ['./blog-sections.component.scss']
})
export class BlogSectionsComponent implements OnInit {

  blogSections: BlogSection[] = [
    { name: "Giallo", className: "warning" },
    { name: "Verde", className: "success" },
    { name: "Blu", className: "primary" },
    { name: "Rosso", className: "danger" },
    { name: "Nero", className: "dark" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
