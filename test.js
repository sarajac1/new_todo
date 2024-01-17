//importerar klass från annan fil så den kan användas i denna 
import { todoListItem, todoList, doneList } from "./todo.js"

//Skapar ett nytt objekt, en ny sak 
const newItem = new todoListItem('Plugga', 'Kompletttera JS', 'Hög', 'ASAP');

//Lägger till saken på listan
newItem.addToList();

let newItem2 = new todoListItem('Handla', 'Matvaror på ICA', 'Låg', '20 januari');
newItem2.addToList();


//Skapar ett nytt objekt och lägger till en ny sak på listan
let newItem3 = new todoListItem('Gymma', 'Leg day', 'Medium', 'Idag kl. 22');
newItem3.addToList(); 

//Skapar ett nytt objekt som består av de tidigare inmatade objekten 
const listItems = { newItem, newItem2, newItem3 }; 




//Sparar (samtliga saker på listan) till fil
//newItem3.saveToFile('SavedList.csv');


// Flyttar innehållet av sparade items till den nuvarande to do listan
//newItem3.displaySavedItems('SavedList.csv');

//Tar bort det sista objektet i to do list
//newItem3.removeFromBottomOfList();


//Tar bort den första saken i listan
//newItem2.removeFromTopofList();
//console.log(todoList.items);

//Tar bort en sak baserad på dess index
//newItem2.removeFromListByIndex(1);

//Ta bort en sak baserad på dess namn
//newItem3.removeFromListByName('Handla');

//Ta bort en sak och lägg till på en "doneList"
//newItem3.removeFromListAndAddToDone(1);
//console.log(doneList.items);

//Flytta en sak till toppen av listan
//newItem3.moveToTop('Handla');

//Flytta en sak längst ner på listan
//newItem3.moveToBottom('Handla');

console.log(todoList.items);  










