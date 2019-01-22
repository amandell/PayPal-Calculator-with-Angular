function ShoppingList()
{
  this.groceries = [];
}

ShoppingList.prototype.addItem = function (item)
{
  this.groceries = this.groceries.concat([item]);
};

ShoppingList.prototype.removeItem = function (item)
{
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
    // Banana !== Banana
  });
};

var mylist = new ShoppingList();

mylist.addItem('Banana');
mylist.addItem('Apple');

console.log(mylist.groceries);

mylist.removeItem('Banana');

console.log(mylist.groceries);

class ShoppingList2 {
  groceries: string[];
  constructor() {
    this.groceries = [];
  }
  addItem(item) {
    this.groceries = [...this.groceries, item];
  }
  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => { item !== grocery});
  }
}

const myNewList = new ShoppingList2();

myNewList.addItem('Pear');
myNewList.addItem('Apple');

console.log(myNewList.groceries);

/*----------------------------------------------------------------------------------*/


import { upppercase } from './formatter';

let myName: string = 'Todd';

console.log(upppercase(myName));