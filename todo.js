  //Exporterar innehållet i denna fil så den kan användas i andra filer 
export { HandleItem, todoList,  }
  
//Importerar använda funktioner som skriver till en fil
import { appendFileSync, readFileSync } from 'node:fs'

//Deklarerar to do list som ett nytt objekt, innehållandes en tom array:
const todoList = {
  items: [],
}  

//Ny klass för att hantera var sak på listan 
class HandleItem {
  constructor(title, description, priority, deadline) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
  }
  
  //Funktion som lägger till en ny sak i listan
  addToList() {
    todoList.items.push({
      title: this.title,
      description: this.description,
      priority: this.priority,
      deadline: this.deadline
    });
    
  }

  //Funktion som sparar till fil (sparar just nu hela listans innehåll)
  saveToFile(fileName) {
    todoList.items.forEach(item => {
      const listContents = `${item.title}, ${item.description}, ${item.priority}, ${item.deadline}`;
      appendFileSync(fileName, listContents + '\n', 'utf8')
    })
  }

  //Funktion som visar det som sparats till fil
  displaySavedItems(fileName) {
    let savedItems = readFileSync(fileName, 'utf-8')
    savedItems.split('\n').forEach(line => {
      if (line.trim() !== '') {
        const [title, description, priority, deadline] = line.split(',');
        this.addToList(title.trim(), description.trim(), priority.trim(), deadline.trim());
      }
    })
   
  }

  //Funktion för att lägga till en sak att göra överst i listan
  addToTopOfList() {
    todoList.items.unshift({
      title: this.title,
      description: this.description,
      priority: this.priority,
      deadline: this.deadline
    });
  }

  //Funktion för att ta bort en sak längst ner i listan
  removeFromBottomOfList() {
    todoList.items.pop();
  }

  //Funktion för att ta bort en sak högst upp i listan/först saken i en array
  removeFromTopofList() {
      todoList.items.shift();
    
  }

  //Ta bort en sak baserad på dess placering i listan
  removeFromListByIndex(index) {
    if (index < 0 || index >= todoList.items.length) {
      return null;
    }
    todoList.items.splice(index, 1)[0];
  }


}