import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // Soi thuộc tính gán ở DOM
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  //bắn ra object Ingredient chứa name, amount
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); //@output để parent thấy

  constructor() {}

  ngOnInit(): void {}
  onBtnAdd() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
// truyền 2 value name,amount input
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
