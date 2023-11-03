// 0, 1, 1, 2, 3, 5, 8, 13, 24, 34, 55, 89


// Fib - Summan av de två förgående talen (börjar på 0, och 1) skapar nästa tal

let n = 8; // 13
let sum = 0;

let current = 0; // först talet
let next = 1; // andra talet

// n-th är ett godtyckligt tal i serien
// ÖVNING: Gör så att for loopen tar fram de "n-th" elementet, ex. (n = 5, sum = 3) (n = 6, sum = 5) ... (n = 9, sum = 24)
for(let i = 0; i < n; i++) {
  // Implementera fib algoritmen 

  if(i > 1) {
    sum = current + next;

    current = next;
    next = sum;
  }
}

console.log(sum); // 13


// Ska for eller while loop användas för att lösa uppgiften? 

// A - Kalle ska städa upp hela gården, alla löv ska bort, det är en blåsig dag

// B - Gertrude ska köpa de varor som finns på köplistan


let symbol = "*";
let inner = "-";

for(let i = 0; i < 5; i++) {
  
  //console.log(symbol);

  for(let j = 0; j < 3; j++) {
    inner = inner + " ";
    console.log(inner, symbol);
  }

  let tmp = inner;
  inner = symbol;
  symbol = tmp;
}


// LEVEL UP: Skapa multiplikationstabellen med nästlade loopar
/*
 1 * 1 = 1
 1 * 2 = 2
 1 * 3 = 3

 ... 

 9 * 1 = 9
 9 * 2 = 18
 9 * 3 = 27
*/