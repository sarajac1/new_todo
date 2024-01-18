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
  addToList = () => {
  let newItem = {
      title: this.title,
      description: this.description,
      priority: this.priority,
      deadline: this.deadline
    };
    todoList.items.push(newItem);
    console.log("Successfully added item to the list.")

  }

  //Funktion som visar listans innehåll
  displayList() {
    console.log(`To do list:\n${JSON.stringify(todoList.items, null, 2)}`);
  }


  //Funktion som sparar listans innehåll till fill och rensar den nuvarande to do list
  saveToFile(fileName) {
    const jsonData = JSON.stringify(todoList.items, null, 2);
    appendFileSync(fileName, `${jsonData}\n`, 'utf8');
    console.log("Successfully saved items to file.");
    todoList.items = []; 
  }

  //Funktion som läser från fil, lägger till i to do list 
  moveSavedItems(fileName) {
    let savedItems = readFileSync(fileName, 'utf-8')
    let parsedItems = JSON.parse(savedItems);
    parsedItems.forEach(item => {
      this.addToList(item.title, item.description, item.priority, item.deadline);
      console.log(`Added to the to do list:\n${JSON.stringify(item, null, 2)}`)
    });
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
    console.log(`Successfully added to the top of the list:\n${JSON.stringify(newItem, null, 2)}`)
    }


  //Funktion för att ta bort en sak längst ner i listan
  removeFromBottomOfList() {
    let removedItem = todoList.items.pop();
    console.log(`Successfully removed the following item from the bottom of the list:\n${JSON.stringify(removedItem, null, 2)}`);
  }

  //Funktion för att ta bort en sak högst upp i listan/först saken i en array
  removeFromTopofList() {
    let removedItem = todoList.items.shift();
    console.log(`Successfully removed from the top of the list:\n${JSON.stringify(removedItem, null, 2)}`)
  }
  

  //Ta bort en sak baserad på dess placering i listan
  removeFromListByIndex(index) {
    if (index < 0 || index >= todoList.items.length) {
      return null;
    }
    let removedItem = todoList.items.splice(index, 1)[0];
    console.log(`Successfully removed item with index ${index}:\n${JSON.stringify(removedItem, null, 2)} `)
  }
  

  //Ta bort en sak baserad på dess namn
  removeFromListByName(title) {
    let removedItem = null;
    for (let index = 0; index < todoList.items.length; index++) {
      if (todoList.items[index].title === title) {
        removedItem = todoList.items.splice(index, 1);
      }
      
    }
    console.log(`Successfully removed item:\n${JSON.stringify(removedItem, null, 2)}`)
  }

  //Ta bort en sak och lägg till den i en "har gjort"-lista (deklarerad som en array ovan), 
  removeFromListAndAddToDone(index) {
    if (index >= 0 && index < todoList.items.length) {
      let doneItem = todoList.items.splice(index, 1)[0]
      doneList.items.push(doneItem)
      console.log(`Successfully added to done list:\n${JSON.stringify(doneItem, null, 2)}`)
    }
  }

  //Flytta en sak till toppen av listan
  moveToTop(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index !== -1) {
      let movedItem = todoList.items.splice(index, 1)[0];
      todoList.items.unshift(movedItem); 
      console.log(`Successfully moved to the top:\n${JSON.stringify(movedItem, null, 2)}`)
    }
  }

  //Flytta en sak till botten av listan
  moveToBottom(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index !== -1) {
      let movedItem = todoList.items.splice(index, 1)[0];
      todoList.items.push(movedItem);
      console.log(`Successfully moved to the bottom:\n${JSON.stringify(movedItem, null, 2)}`)
    }
  }

  //Flytta en sak ett steg ner i listan
  moveDown(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index !== -1 && index < todoList.items.length) {
      let movedItem = todoList.items[index];
      [todoList.items[index], todoList.items[index + 1]] = [todoList.items[index + 1], todoList.items[index]]
      console.log(`Successfully moved item down a step:\n${JSON.stringify(movedItem, null, 2)}`);

    }

  }

  //Flytta en sak ett steg upp i listan
  moveUp(title) {
    let index = todoList.items.findIndex(item => item.title === title);
    if (index > 0) {
      let movedItem = todoList.items[index];
      [todoList.items[index], todoList.items[index - 1]] = [todoList.items[index - 1], todoList.items[index]]
    console.log(`Successfully moved item up a step:\n${JSON.stringify(movedItem, null, 2)} `)
    }

  }
}