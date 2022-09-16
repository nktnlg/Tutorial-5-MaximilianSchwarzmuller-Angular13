import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styles: [
  ]
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe:{name: string, description: string, imagePath: string}={name:'', description: '', imagePath: ''};
  
  constructor() { }

  ngOnInit(): void {
  }

}
