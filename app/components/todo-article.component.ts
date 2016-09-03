import { Component } from '@angular/core';
import { Item } from '../item';

 @Component({
    selector: 'todo-article',
    inputs: ['item'],
    host: { class: 'row' },
     template: `
     <div *ngIf="item.completed===false" #myElement>
        <div class="content">
        <p>
         <strong>  {{ item.title }}</strong> 
        </p>
      </div>
    <nav class="level">
      <div class="level-left">
        <a class="level-item">
          <input type="checkbox" #chkbox [checked]="item.completed" (click)="setCompleted(item, chkbox.checked)">
        </a>
        <div class="level-item">
          <span> {{item.completed ? 'Is Done' : 'Working on it' }}</span>
        </div>
        <div class="level-item">
          <a (click)="myElement.remove()"> x </a>
        </div>
      </div>
    </nav>
    </div>
     <br>
` }) 
export class TodoArticleComponent { item: Item; setCompleted(item: Item, checked: boolean) 
  { 
    item.completed = checked;
   } 
  }