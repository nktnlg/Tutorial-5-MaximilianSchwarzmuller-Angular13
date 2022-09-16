import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:{name: string, description: string, imagePath: string}={name:'', description: '', imagePath: ''};

  constructor() { }


  ngOnInit(): void {
  }

}
