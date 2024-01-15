  //Exporterar innehållet i denna fil så den kan användas i andra filer 
export { todoList, HandleItem }
  

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
  
  //Lägger till en ny sak i listan
  addToList() {
    todoList.items.push({
      title: this.title,
      description: this.description,
      priority: this.priority,
      deadline: this.deadline
    });
    
  }

//Lägg till en sak att göra överst i listan
addToTopOfList() {
  todoList.items.unshift({
    title: this.title,
    description: this.description,
    priority: this.priority,
    deadline: this.deadline
  });
}
}



//3.Lägg till en sak att göra överst i listan
/* addToTopOfList(description) {
  let item = { description }
  this.items.unshift(item)
  console.log(this.items)
} */


  /* //1. Deklarera en variabel med namnet todoList
  const todoList = {
  items: [],
  //deklarerar en array med namnet doneList 
  doneList: [],

  //2. Lägg till en funktion som lägger till en sak till listan 
  addToList(description) {
    let item = { description }
    this.items.push(item)
    console.log(this.items)
  },

  //Sparar till fil
  saveToFile(fileName) {
    this.items.forEach(item => {
      appendFileSync(fileName, item.description + '\n', 'utf8')
    })
  },

  //Visar det som sparats till fil
  displaySavedItems(fileName) {
    let savedItems = readFileSync(fileName, 'utf-8')
    savedItems.split('\n').forEach(description => {
      if (description.trim() !== '') {
        todoList.addToList(description.trim())
      }
    })
    console.log(savedItems)
  },

  //3.Lägg till en sak att göra överst i listan
  addToTopOfList(description) {
    let item = { description }
    this.items.unshift(item)
    console.log(this.items)
  },

  //4.Ta bort en sak längst ner i listan
  removeFromBottomOfList(description) {
    let item = { description }
    this.items.pop(item)
    console.log(this.items)
  },

  //5.Ta bort en sak högst upp i listan / första saken i en array. Skrev om tidigare kod för detta.  
  removeFromTopOfList() {
    if (this.items.length > 0) {
      this.items.shift()
      console.log(this.items)
    }
  },

  //6. Ta bort en sak baserad på dess placering i listan 
  removeFromListByIndex(index) {
    if (this.items.index < 0) {
      return null;
    }
    if (this.items.index >= this.items.length) {
      return null;
    }
    this.items.splice(index, 1)[0];
    console.log(this.items)
  },

  //7. Ta bort en sak baserad på dess namn
  removeFromListByName(description) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].description === description) {
        this.items.splice(index, 1);
      }
      console.log(this.items)
    }},

  //8. Ta bort en sak och lägg till den i en "har gjort"-lista (deklarerad som en array ovan), 
  removeFromListAndAddToDone(index) {
    if (index >= 0 && index < this.items.length) {
      let doneItem = this.items.splice(index, 1)[0]
      this.doneList.push(doneItem)
      }
      console.log(this.items)
      },

  //9. Flytta en sak till toppen av listan
  moveToTop(description) {
    let index = this.items.findIndex(item => item.description === description)
      if (index !== -1) {
        let movedItem = this.items.splice(index, 1)[0]
        this.items.unshift(movedItem)
      }
      console.log(this.items)
    },

  //10.Flytta en sak till botten av lista
  moveToBottom(description) {
    let index = this.items.findIndex(item => item.description === description)
      if (index !== -1) {
        let movedItem = this.items.splice(index, 1)[0]
        this.items.push(movedItem)
      }
      console.log(this.items)
    },

  //11. Flytta en sak ett steg ner i listan 
  moveDown(description) {
    let index = this.items.findIndex(item => item.description === description)
      if (index !== -1 && index < this.items.length - 1) {
        [this.items[index], this.items[index + 1]] = [this.items[index + 1], this.items[index]]
      }
      console.log(this.items)
    },

  //12. Flytta en sak ett steg upp i listan
  moveUp(description) {
    let index = this.items.findIndex(item => item.description === description)
      if (index > 0) {
        [this.items[index], this.items[index - 1]] = [this.items[index - 1], this.items[index]]
      }
      console.log(this.items)
    }
  }
 */