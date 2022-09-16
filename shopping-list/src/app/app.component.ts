import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';
  link = 'recipe'

  onNewLink(event: {link:string}){
    this.link = event.link
  }

}
