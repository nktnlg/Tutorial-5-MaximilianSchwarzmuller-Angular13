import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [
  ]
})
export class RecipesComponent implements OnInit {

  current:{name: string, description: string, imagePath: string}={name:'', description: '', imagePath: ''};
  constructor() { }

  onNewCurrent(recipe:{name: string, description: string, imagePath: string}){
    this.current=recipe;
  };

  ngOnInit(): void {
  };

}
