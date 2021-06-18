import { Component, Input } from '@angular/core'

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent{
    @Input() i: any;
    @Input() plan: any;
}