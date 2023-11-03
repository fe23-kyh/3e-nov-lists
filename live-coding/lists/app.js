// let name = "Henrik";
// let name2 = "Gertrude";
// let name3 = undefined;
// let name4 = "Yves";

// console.log(name, name2, name3, name4);

let names = ['Henrik', 'Gertrude', 'Yves'];
let ages = [27, 19, 25];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// console.log(names.length);

// for(let i = 0; i < names.length; i++) { 
//   console.log(i + ": " + names[i] + " is " + ages[i] + " old");
// }

// CRUD operationer - Create, read, update, delete


// Read operation
// for(let i = 0; i < names.length; i++) {
//   console.log(i + " - " + names[i]);
// }

// let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 25, 38, 54, 89];
// for(let i = 0; i < fibs.length; i++) {
//   console.log(fibs[i]);
// }

let shoppingList = [
  "Kaffe", "Glass", "Mjölk", "Kebabpizza", 
  "Smör", "Falukorv", "Ägg", "Häcksax", "Twin turbo"
];
// ÖVNING: Skapa en for loop som skriver ut innehållet i shoppingList
// MEN, den ska skriva ut varje element med dess index nummer, börja på 1
/*
 1 - Kaffe
 2 - Glass
 ...
 9 - Twin turbo
*/
for(let i = 0; i < shoppingList.length; i++) {
  // console.log((i + 1) + " - " + shoppingList[i]);
  console.log(`${i + 1} - ${shoppingList[i]}`);
}


// Create operation
console.log("---- create -----\n" );

shoppingList.push("Chips!!");

for(let i = 0; i < shoppingList.length; i++) {
  // console.log((i + 1) + " - " + shoppingList[i]);
  console.log(`${i + 1} - ${shoppingList[i]}`);
}

// Update operation
console.log("---- Update -----\n" );

console.log(shoppingList[2]);
shoppingList[2] = 'Filmjölk';

// Byt plats på ägg och smör så att ägg hamnar på index 5 i utskriften, och smör på index 7
let tmp = shoppingList[4];
shoppingList[4] = shoppingList[6];
shoppingList[6] = tmp;


for(let i = 0; i < shoppingList.length; i++) {
  // console.log((i + 1) + " - " + shoppingList[i]);
  console.log(`${i + 1} - ${shoppingList[i]}`);
}


// Delete operation
console.log("---- Delete -----\n" );


let removeIndex = shoppingList.indexOf("Kebabpizza");

shoppingList.splice(removeIndex, 1); // 1:an står för "hur många" element som ska tas bort efter index:et

for(let i = 0; i < shoppingList.length; i++) {
  // console.log((i + 1) + " - " + shoppingList[i]);
  console.log(`${i + 1} - ${shoppingList[i]}`);
}


// Övning: Skriv en loop som söker igenom listan och ger tillbaka index värdet på sökträffen
// Observera "pizza" ska ge indexvärde av "Kebabpizz", precis som "mör" ska ge index av "Smör"
// Om sökningen inte gav ett resultat, skriv då ut ett meddelande till användaren som säger "Your query was not found in the list"
// Om sökningen gav ett resultat, skriv ut "(itemName) was found on index (index)"

let index = 0;
let query = "ä"; // ska ge index av smör (index = 5)
let isMatched = false;

/** hint
 * let fruit = "Äpple";
 * console.log(fruit.includes('pp'));
 */

query = query.toLowerCase();

// Så länge som n-th elementet inte innehåller "query", sök vidare och öka index
// Om elementet innehåller "query", avsluta loppen och skriv ut resultatet
// Om index överskrider listans längd, avsluta loopen och skriv ut att elmentet inte fanns

while(!isMatched && index < shoppingList.length) {
  let item = shoppingList[index];

  //vid öskning, gör allt till lower case
  item = item.toLowerCase();

  if(item.includes(query)) {
    isMatched = true;
  } else {
    index++;
  }
}

if(index < shoppingList.length) {
  console.log("On index " + index + " found item " + shoppingList[index]);
} else {
  console.log("Could not find search query: " + query);
}

// ÖVNING: Gör en loop som hittar alla de resultat som matcher mot en söksträng
// Ex "query = ä" ger ['Ägg', 'Häcksax']