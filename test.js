//importerar klasser och objekt från annan fil så den kan användas i denna 
import { todoListItem, todoList, doneList } from "./todo.js"

//Skapar ett nytt objekt, en ny sak
let newItem = new todoListItem('Plugga', 'Kompletttera JS', 'Hög', 'ASAP');


//Lägger till saken på listan
//newItem.addToList();

//Skapar fler objekt och lägger till på listan för att kunna testa programmet
//let newItem2 = new todoListItem('Handla', 'Matvaror på ICA', 'Låg', '20 januari');
//newItem2.addToList();

//let newItem3 = new todoListItem('Gymma', 'Leg day', 'Medium', 'Idag kl. 22');
//newItem3.addToList();


//För att se innehållet av to do list:
//newItem.displayList();

//Sparar samtliga saker på listan till fil
//newItem3.saveToFile('savedList.json');


// Flyttar innehållet av det som sparats till fil till to do list
//newItem.moveSavedItems('savedList.json'); 


//Lägger till en sak längst upp på listan
//let newItem4 = new todoListItem ('Laga mat', 'Ärtsoppa', 'Medium', 'Idag kl. 18');
//newItem4.addToTopOfList();


//Tar bort det sista objektet i to do list
//newItem.removeFromBottomOfList();


//Tar bort den första saken i listan
//newItem2.removeFromTopofList();


//Tar bort en sak baserad på dess index
//newItem2.removeFromListByIndex(1);



//Ta bort en sak baserad på dess namn
//newItem3.removeFromListByName('Handla');


//Ta bort en sak och lägg till på en "doneList"
//newItem3.removeFromListAndAddToDone(1);



//Flytta en sak till toppen av listan
//newItem3.moveToTop('Handla');



//Flytta en sak längst ner på listan
//newItem3.moveToBottom('Handla');



//Flytta en sak ett steg ner i listan
//newItem3.moveDown('Handla');



//Flytta en sak ett steg upp i listan
//newItem3.moveUp('Gymma'); 

 