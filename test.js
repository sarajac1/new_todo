//importerar klass från annan fil så den kan användas i denna 
import { HandleList} from "./todo.js"

//Skapar en ny instans av listan med importerade klasser

const list = new HandleList;


list.addToList('Plugga', 'Komplettera JS', 'Hög', 'ASASP');
console.log(list); 