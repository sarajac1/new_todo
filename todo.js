//1. Deklarera en variabel med namnet todoList
let todoList = ['Boka tandläkartid', 'Uppdatera CVt'];


//2. Skapa en funktion addToList som lägger till en sak att göra på listan och returnerar hela listan
function addToList(todoItem) {
  todoList.push(todoItem)
  return todoList;
}


/*3. Lägg till en sak att göra överst i listan
Ibland får man saker att göra som är viktigare än alla andra.Skapa en funktion addToTopOfList som lägger till en sak att göra längst upp i listan, samt returnerar hela listan.*/


function addToTopOfList(todoItem) {
  todoList.unshift(todoItem)
  return todoList;
}

/*4. Ta bort en sak längst ner i listan
Kanske var det där längst ner i att göra listan inte så viktigt?Skriv en funktion removeFromBottomOfList som tar bort den sak som är längst ner i listan och returnerar den.*/

function removeFromBottomOfList(todoItem) {
  todoList.pop(todoItem)
  return todoList;
}

/* 5. Ta bort en sak högst upp i listan
Du fick äntligen det som var viktigast gjort?Skriv en funktion removeFromTopOfList som tar bort den sak som är högst i listan och returnerar den */

function removeFromTopOfList(todoItem) {
  todoList.shift(todoItem)
  return todoList;
}

/*6. Ta bort en sak baserad på dess placering i listan
Det är inte alltid man får saker gjorda i ordning.Skriv en funktion removeFromListByIndex till vilken man skickar ett nummer och saken på denna plats i listan tas bort.Returnera den bortplockade saken.

  Notera: För enkelhetens skull räknar vi det översta elementet som nummer 0, nästa som nummer 1 etc.Precis som en dator.Försök inte ”förmänskliga funktionen” till att börja på nummer 1. Då blir den svårare att återanvända i din programmering.

    Notera 2: Tillåt INTE att man försöker ta bort saker på negativa platser, dvs.skickar ett nummer mindre än 0.*/


function removeFromListByIndex(index) {
  if (index < 0) {
    return null;
  }
  if (index >= todoList.length) {
    return null;
  }
  return todoList.splice(index, 1)[0];
}

/* 7. Ta bort en sak baserad på dess namn
Skriv en funktion removeFromListByName som hittar en sak i listan baserat på dess namn och tart bort den.Returnera den borttagna saken.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByIndex(från steg 6) inuti din funktion. */

function removeFromListByName(todoItem) {
  for (let index = 0; index <= todoList.length; index++) {
    if (todoList[index] === todoItem) {
      return todoList.splice(index, 1)[0];
    }
  }
}

/* 8. Ta bort en sak och lägg till den i ”har gjort”-lista
Skapa en att ”har gjort”-lista genom att deklarera en variabel med namnet doneList som en array.
Skriv en funktion removeFromListAndAddToDone som flyttar en sak from att göra - listan till ”har gjort”-listan.Returnera listan över saker som är gjorda.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) inuti din funktion. */

let doneList = [];

function removeFromListAndAddToDone(todoItem) {
  let index = todoList.indexOf(todoItem)
  doneList = todoList.splice(index, 1)[0];


}

/* 9. Flytta en sak till toppen av listan
Ibland blir en sak plötsligt riktigt viktig att göra.Skriv en funktion moveToTop som hittar en sak i listan baserat på dess namn och flyttar den till toppen.Returnera hela att göra - listan.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) och addToTopOfList(från steg 3) inuti din funktion. */

function moveToTop(todoList, todoItem) {
  let index = todoList.indexOf(todoItem)

  if (index !== -1) {
    let removedItem = todoList.splice(index, 1)[0];
    todoList.unshift(removedItem)
  }
  return todoList;

}



/* 10. Flytta en sak till botten av listan
Ibland blir en sak plötsligt ganska oprioriterad.Skriv en funktion moveToBottom som hittar en sak i listan baserat på dess namn och flyttar den till botten.Returnera hela att göra - listan.

  Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) och addToList(från steg 2) inuti din funktion. */

function moveToBottom(todoList, todoItem) {
  let index = todoList.indexOf(todoItem)
  if (index !== -1) {
    let removedItem = todoList.splice(index, 1)[0]
    todoList.push(removedItem)
  }
  return todoList;
}


/* 11. Flytta en sak ett steg ner i listan
Ibland behöver man prioritera ner något lite grann.Skriv en funktion moveDown som flyttar en sak ett steg ner i listan.

  Tips: Man kan även se detta som att saken byter plats med det som var nedanför den. */

function moveDown(todoList, todoItem) {
  let index = todoList.indexOf(todoItem);
  if (index !== -1 && index < todoList.length - 1) {
    let temp = todoList[index];
    todoList[index] = todoList[index + 1];
    todoList[index + 1] = temp;
  }
  return todoList;
}

/* 12. Flytta en sak ett steg upp i listan
Ibland behöver man prioritera upp något lite grann.Skriv en funktion moveUp som flyttar en sak ett steg upp i listan.

  Tips: Man kan även se detta som att saken byter plats med det som var ovanför den. */

function moveUp(todoList, todoItem) {
  let index = todoList.indexOf(todoItem);
  if (index > 0) {
    let temp = todoList[index];
    todoList[index] = todoList[index - 1];
    todoList[index - 1] = temp;
  }
  return todoList;
}