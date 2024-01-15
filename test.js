//importerar klass från annan fil så den kan användas i denna 
import { HandleItem, todoList} from "./todo.js"

//Skapar en ny instans av listan med importerade klasser 
const newItem = new HandleItem('Plugga', 'Kompletttera JS', 'Hög', 'ASAP');

//Lägger till en sak på listan
newItem.addToList();

let newItem2 = new HandleItem('Handla', 'Matvaror på ICA', 'Låg', '20 januari');
newItem2.addToList();


//Lägger till en ny sak på toppen av listan
let newItem3 = new HandleItem('Gymma', 'Leg day', 'Medium', 'Idag kl. 22');
newItem3.addToTopOfList();
console.log(todoList.items);



