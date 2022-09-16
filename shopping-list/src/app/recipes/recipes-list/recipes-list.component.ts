import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styles: [
  ]
})
export class RecipesListComponent implements OnInit {
  @Output() newCurrent = new EventEmitter<{name: string, description: string, imagePath: string}>;
  recipes: Recipe[] = [
    new Recipe('First Test Recipe', 'This is a test recipe', 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg'),
    new Recipe('Second Test Recipe', 'This also is a test recipe', 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg'),
    new Recipe('Third Test Recipe', 'Guess what', 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg')
    
  ];

  constructor() { }

  onNewCurrent(data:{name: string, description: string, imagePath: string}){
    this.newCurrent.emit(data)
  };
  ngOnInit(): void {
  }

}
