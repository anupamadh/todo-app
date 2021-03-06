// import { ArticleComponent } from './reddit-article.component'
import { Item } from '../item' ;
import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'todo',
    templateUrl: 'app/components/views/todo.html',
providers: [ArticleService]
})
export class TodoApp implements OnInit{

    items: Item[];

    addItem(title: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}`);
        this.items.push(new Item(title.value, false));
        title.value = '';
      
    }

    constructor(private _articleService: ArticleService){
      
    }




ngOnInit() {
  this.items = this._articleService.getArticles();
}


}