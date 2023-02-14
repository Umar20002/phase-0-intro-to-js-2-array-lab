const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");

}
function destructivelyPrependCat(name){
    cats.unshift(name);

}
function destructivelyRemoveLastCat(){
    cats.pop();
    cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    cats;
}
function appendCat(name){
    const name_1= [...cats,"Broom"];
    return name_1;
}
function prependCat(name){
    const name_2 = ["Arnold", ...cats]
    return name_2
}
function removeLastCat(){
    const kats = cats.slice(0,cats.length-1)
    return kats
}
function removeFirstCat(){
    const kat = cats.slice(1)
    return kat
}
console.log(cats);