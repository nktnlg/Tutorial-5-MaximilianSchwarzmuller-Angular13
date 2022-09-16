import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @Output() newLink = new EventEmitter<{link: string}>;
  link: string = "recipes";

  onLink(link: string){
    this.newLink.emit({
      link
    })
  }

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
