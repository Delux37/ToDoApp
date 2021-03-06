import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  enteredText: any;
  plans : string[] = [ 'temp', 'hello', 'world' ];
  editMode = false;
  editingItem: any;

  onSubmit(){
    this.plans.push(this.enteredText);
    this.enteredText = "";
}

removeItem(id: number){
  this.plans.splice(id ,1);
}

onEdit(){
  this.plans[this.editingItem] = this.enteredText;
  this.editMode = false;
  this.editingItem = null;
  this.enteredText = "";
}

editItem(i: number){
  this.editMode = true;
  this.enteredText = this.plans[i];
  this.editingItem = i;
}

}
