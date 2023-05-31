import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Panter'];
  public deletedHeroe?: string;


  removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();
  }

}
