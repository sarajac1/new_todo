//importerar klass från annan fil så den kan användas i denna 
import { HandleItem, todoList } from "./todo.js"

//Skapar ett nytt objekt, en ny sak 
const newItem = new HandleItem('Plugga', 'Kompletttera JS', 'Hög', 'ASAP');

//Lägger till saken på listan
newItem.addToList();

let newItem2 = new HandleItem('Handla', 'Matvaror på ICA', 'Låg', '20 januari');
newItem2.addToList();


//Lägger till en ny sak på toppen av listan
let newItem3 = new HandleItem('Gymma', 'Leg day', 'Medium', 'Idag kl. 22');
newItem3.addToList(); 




//Sparar (samtliga saker på listan) till fil
//newItem3.saveToFile('SavedList.csv');


// Flyttar innehållet av sparade items till den nuvarande to do listan
//newItem3.displaySavedItems('SavedList.csv');

//Tar bort det sista objektet i to do list
//newItem3.removeFromBottomOfList();


//Tar bort den första saken i listan
//newItem2.removeFromTopofList();
//console.log(todoList.items); 









