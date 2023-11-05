//1. Deklarera en variabel med namnet todoList
const todoList = {
  items: [],

  //2. Lägg till en funktion som lägger till en sak till listan 
  addToList(description) {
    let item = { description }
    this.items.push(item)
    console.log(this.items)
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
    
    }
  console.log(this.items)
  }  

}



/* 8. Ta bort en sak och lägg till den i ”har gjort”-lista
Skapa en att ”har gjort”-lista genom att deklarera en variabel med namnet doneList som en array.
Skriv en funktion removeFromListAndAddToDone som flyttar en sak from att göra - listan till ”har gjort”-listan.Returnera listan över saker som är gjorda.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) inuti din funktion. */

/* let doneList = [];

function removeFromListAndAddToDone(todoItem) {
  let index = todoList.indexOf(todoItem)
  doneList = todoList.splice(index, 1)[0];


} */

/* 9. Flytta en sak till toppen av listan
Ibland blir en sak plötsligt riktigt viktig att göra.Skriv en funktion moveToTop som hittar en sak i listan baserat på dess namn och flyttar den till toppen.Returnera hela att göra - listan.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) och addToTopOfList(från steg 3) inuti din funktion. */
/* 
function moveToTop(todoList, todoItem) {
  let index = todoList.indexOf(todoItem)

  if (index !== -1) {
    let removedItem = todoList.splice(index, 1)[0];
    todoList.unshift(removedItem)
  }
  return todoList;

} */



/* 10. Flytta en sak till botten av listan
Ibland blir en sak plötsligt ganska oprioriterad.Skriv en funktion moveToBottom som hittar en sak i listan baserat på dess namn och flyttar den till botten.Returnera hela att göra - listan.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) och addToList(från steg 2) inuti din funktion. */

/* function moveToBottom(todoList, todoItem) {
  let index = todoList.indexOf(todoItem)
  if (index !== -1) {
    let removedItem = todoList.splice(index, 1)[0]
    todoList.push(removedItem)
  }
  return todoList;
} */


/* 11. Flytta en sak ett steg ner i listan
Ibland behöver man prioritera ner något lite grann.Skriv en funktion moveDown som flyttar en sak ett steg ner i listan.

  Tips: Man kan även se detta som att saken byter plats med det som var nedanför den. */

/* function moveDown(todoList, todoItem) {
  let index = todoList.indexOf(todoItem);
  if (index !== -1 && index < todoList.length - 1) {
    let temp = todoList[index];
    todoList[index] = todoList[index + 1];
    todoList[index + 1] = temp;
  }
  return todoList;
} */

/* 12. Flytta en sak ett steg upp i listan
Ibland behöver man prioritera upp något lite grann.Skriv en funktion moveUp som flyttar en sak ett steg upp i listan.

  Tips: Man kan även se detta som att saken byter plats med det som var ovanför den. */

/* function moveUp(todoList, todoItem) {
  let index = todoList.indexOf(todoItem);
  if (index > 0) {
    let temp = todoList[index];
    todoList[index] = todoList[index - 1];
    todoList[index - 1] = temp;
  }
  return todoList;
} */