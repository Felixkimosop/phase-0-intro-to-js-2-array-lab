// Write your solution here!
// function cats(){
//     cats.length=0;

//     cats.push("Milo", "Otis", "Garfield");

// }
// function cats(){
//     ["Milo", "Otis", "Garfield"]
// }

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){

    cats.push ("Ralph")

    cats;
}
function destructivelyPrependCat(name){

    cats.unshift("Bob")

    cats;
}
function destructivelyRemoveLastCat(){

    cats.pop()

    cats;
}
function destructivelyRemoveFirstCat(){

    cats.shift()

    cats;
}

function appendCat(name){

  var allCats= [ ...cats, name];

  return allCats;
}

function prependCat(name){

    var allCats= [name, ...cats];

    return allCats;
}
function  removeLastCat(){

    var catts= cats.slice(0,cats.length-1);

    return catts;
}

function removeFirstCat(){

    var catts= cats.slice(1);

    return catts;
}