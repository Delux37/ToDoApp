import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent{
    @Input() id: any;
    @Input() plan: any;

    @Output() onRemove = new EventEmitter();
    @Output() onEdit = new EventEmitter<number>();

    removeItem(){
        return this.onRemove.emit(this.id);
    }
    editItem(){
        return this.onEdit.emit(this.id);
    }
}