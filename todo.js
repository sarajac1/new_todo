  //Exporterar innehållet i denna fil så den kan användas i andra filer 
export { todoListItem, todoList, doneList }
  
//Importerar funktioner som skriver till och läser från fil
import { appendFileSync, readFileSync } from 'node:fs'

//Deklarerar to do list som ett nytt objekt, innehållandes en tom array:
const todoList = {
  items: [],
}

//Deklarerar doneList som ett nytt objekt, innehållandes en tom array
const doneList = {
  items: [],
}

//Ny klass för att skapa nya listobjekt 
class todoListItem {
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
    console.log(`Successfully added item to the list: \nTitle: ${this.title}\nDescription: ${this.description}\nPriority: ${this.priority}\nDeadline: ${this.deadline}`);
  }

  //Funktion som sparar listans innehåll till fill 
  saveToFile(fileName) {
    todoList.items.forEach(item => {
      const listContents = `${item.title}, ${item.description}, ${item.priority}, ${item.deadline}`;
      appendFileSync(fileName, listContents + '\n', 'utf8')
    })
    console.log("Successfully saved items to file.")
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
    let newItem = {
      title: this.title,
      description: this.description,
      priority: this.priority,
      deadline: this.deadline
    };
    todoList.items.unshift(newItem);
    console.log(`Successfully added to the top of the list:\nTitle: ${this.title}\nDescription: ${this.description}\nPriority: ${this.priority}\nDeadline: ${this.deadline}`);
    }




  //Funktion för att ta bort en sak längst ner i listan
  removeFromBottomOfList() {
    let removedItem = todoList.items.pop();
    console.log(`Successfully removed the following item from the bottom of the list:\n${JSON.stringify(removedItem, null, 2)}`);

    
  }

  //Funktion för att ta bort en sak högst upp i listan/först saken i en array
  removeFromTopofList() {
    todoList.items.shift();
    console.log("Successfully removed from the top of the list.")
  }
  


  //Ta bort en sak baserad på dess placering i listan
  removeFromListByIndex(index) {
    if (index < 0 || index >= todoList.items.length) {
      return null;
    }
    todoList.items.splice(index, 1)[0];
    console.log("Successfully removed.")
  }

  //Ta bort en sak baserad på dess namn

  removeFromListByName(title) {
    for (let index = 0; index < todoList.items.length; index++) {
      if (todoList.items[index].title === title) {
        todoList.items.splice(index, 1);
      }
      
    }
    console.log("Successfully removed.")
  }

  //Ta bort en sak och lägg till den i en "har gjort"-lista (deklarerad som en array ovan), 
  removeFromListAndAddToDone(index) {
    if (index >= 0 && index < todoList.items.length) {
      let doneItem = todoList.items.splice(index, 1)[0]
      doneList.items.push(doneItem)
    }
    console.log("Successfully added to done list.")

  }

  //Flytta en sak till toppen av listan
  moveToTop(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index !== -1) {
      let movedItem = todoList.items.splice(index, 1)[0];
      todoList.items.unshift(movedItem); 
    }
    console.log("Successfully moved to the top.")
  }

  //Flytta en sak till botten av listan
  moveToBottom(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index !== -1) {
      let movedItem = todoList.items.splice(index, 1)[0];
      todoList.items.push(movedItem);
      
    }
    console.log("Successfully moved item to the bottom.")

  }

  //Flytta en sak ett steg ner i listan
  moveDown(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index !== -1 && index < todoList.items.length) {
      [todoList.items[index], todoList.items[index + 1]] = [todoList.items[index + 1], todoList.items[index]]
    }
    console.log("Successfully moved item down a step.")
  }

  //Flytta en sak ett steg upp i listan
  moveUp(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index > 0) {
      [todoList.items[index], todoList.items[index - 1]] = [todoList.items[index - 1], todoList.items[index]]
    }
    console.log("Successfully moved item up a step.")
  }


}