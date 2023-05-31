import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 1000 }
  ];

  // onDelete = index value: number

  onDeleteCharacter( id?: string ):void {
    // TODO emitir el ID del personaje
    if( !id ) return;
    this.onDeleteId.emit( id );
  }


}
