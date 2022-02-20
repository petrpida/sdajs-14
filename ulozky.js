// 1. Prohodit hodnoty dvou proměnných
// 1.1. Dvě proměnné a=5, b=10
let a = 5;
let b = 10;
// 1.2. Prohodit jejich hodnoty
let tmp = a; // 5, tmp = temporary, dočasná
a = b; // 10
b = tmp; // 5
// 1.3. Vypsat obě proměnné
// console.log(a, b);

// 2. Součet
// 2.1. Dvě proměnné a, b
a = 5;
b = 10;
// 2.2. Proměnná c = součet "a" a "b"
let c = a + b;
// 2.3. Nová funkce secist(a, b) vrací součet
function secist(a, b) {
    return a + b;
}
// 2.4. Vypsat secist(5, 10)  (v terminálu 15)
// console.log(secist(5, 10))

// 3. Konkatenace polí
// 3.1. Dvě pole a, b
a = [1, 2];
b = [5, 6];
// 3.2. Do proměnné c nové pole a, za něj b
//      (a=[1, 2], b=[5, 6], c=[1, 2, 5, 6])
//      a.concat(b)
c = a.concat(b);
// 3.3. Nová funkce spojitPole(a, b) vrací konkatenované pole
const spojitPole = (a, b) => {
    return a.concat(b);
};
// 3.4. Vypsat spojitPole([1, 2], [5, 6])
// console.log(spojitPole(a, b));


// 4. N-krát vypiš M
// 4.1. Dvě čísla m, n
let m = 5;
let n = 3;
// 4.2. n-krát vypsat "m"
// for (let i = 0; i < n; i++) {
//     console.log(m);
// }
// 4.3. funkce nkratVypisM(m, n)
function nkratVypisM(m, n) {
    for (let i = 0; i < n; i++) {
        console.log(m);
    }
}
// 4.4. Ověřit, že nkratVypisM(5, 3)
//     5
//     5
//     5
// nkratVypisM(5, 3);


// 5. Vytvoř pole, kde je N-krát M
// 5.1. Dvě proměnné m, n
m = 5;
n = 3;
// 5.2. Vytvoř pole "pole", kde je N-krát M
//   m=5, n=3,  pole=[5, 5, 5]
let pole = [];
for (let i = 0; i < n; i++) {
    pole.push(m);
}
// console.log(pole);
// 5.3. Vytvoř funkci poleNkratM(m, n), která bude vracet toto pole
function poleNkratM(m, n) {
    let pole = [];
    for (let i = 0; i < n; i++) {
        pole.push(m);
    }
    return pole;
}
// 5.4. Ověř funkčnost výpisem na konzoli
//console.log(poleNkratM(3, 5));


// 6. Doplnit funkce odecist(a, b), nasobit(a, b), delit(a, b)
function odecist(a, b) {
    return a - b;
}

function nasobit(a, b) {
    return a * b;
}

function delit(a, b) {
    return a / b;
}

// 7. Mini-kalkulačka
// 7.1. Proměnná a, b, operace
a = 5
b = 10

function kalkulacka(operace, a, b) {
    if (operace === "+") {
        console.log(secist(a, b))
    } else if (operace === "-") {
        console.log(odecist(a, b))
    } else if (operace === "*") {
        console.log(nasobit(a, b))
    } else if (operace === "/") {
        console.log(delit(a, b))
    } else {
        console.log("zadali jste spatne znamenko!")
    }
}
// 7.2.1. Pokud operace == "+", zavole secist()

// 7.2.2. Pokud operace == "-", zavole odecist()

// 7.2.3. Pokud operace == "/", zavole nasobit()

// 7.2.4. Pokud operace == "*", zavole delit()

// 7.3. Vytvořit funkci kalkulacka(operace, a, b)
// kalkulacka("+", 5, 10) === 15
// kalkulacka("-", 5, 10) === -5
// kalkulacka("*", 5, 10) === 50
// kalkulacka("/", 5, 10) === .5

kalkulacka("/", 5, 10)

// Opakovací úkoly:
// Máme-li seznam objektů ([ {key: "a"}, {key: "b"}, {key: "c"} ]), jak z nich vytáhnout 
// hodnoty z klíče key a vytvořit seznam ["a", "b", "c"] ?
const seznam = [
    {key: "a"},
    {key: "b"},
    {key: "c"}
]
const novySeznam = seznam.map(el => el.key)
console.log(novySeznam)

const numberObjs = [
    { left: 5, right: 10 },
    { left: 0, right: 0 },
    { left: 8, right: 3 },
]
const sumLeft = numberObjs.map(x => x.left)
console.log(sumLeft)
const sumRight = numberObjs.map(x => x.right)
console.log(sumRight)

const sum = numberObjs.map(x => x.left + x.right)
console.log(sum)

const sum1 = []
numberObjs.forEach(element => {
    sum1.push(element.left + element.right)
});
console.log(sum1)
// Varianta 1: máme-li seznam uživatelů [ { name: "Adam", address: { city: "Brno } }, ... ] , 
// jak z něj vytvořit seznam měst?
const uzivatele = [
    {name: "Adam", surname: "Ondra", address: {city: "Brno"}},
    {name: "Jan", surname: "Novotny", address: {city: "Plzen"}},
    {name: "Pavel", surname: "Svoboda", address: {city: "Znojmo"}},
]
const mesta = uzivatele.map(el => el.address.city)
console.log(mesta)
// Varianta 2: máme-li objekt uživatelů, kde každý uživatel je označený svým ID 
//{ 1: {name: "Adam"}, 2: {name: "Eva"} } , jak z objektu vytvořit seznam jmen ["Adam", "Eva?] ?
const users = { 1: {name: "Adam", surname: "Ondra"}, 2: {name: "Eva", surname: "Brzobohata"}, 3: {name: "Pavel", surname: "Novak"}}
const usersName = Object.values(users)
console.log(usersName.map(el => el.name))
console.log(usersName.map(el => el.surname))
console.log(usersName.map(el => el.name + " " + el.surname))

// 9. Funkce, listy, objekty
//   {name: "A", surname: "B"} => "A B"
// 9.1 Vytvořte funkci, která z objektu uživatele vrátí jeho celé jméno
const user1 = {name: "Jan", surname: "Novak"}
function celeJmenoObj(obj) {
    return obj.name + " " + obj.surname
}

console.log(celeJmenoObj(user1))
// 9.2 Vytvořte funkci, která ze seznamu uživatelů vrátí jejich celá jména
function celeJmenoArray(array) {
    return array.map(x => x.name + " " + x.surname)
}
console.log(celeJmenoArray(uzivatele))
// 9.3 Vytvořte funkci, která z objektu id:uživatel vrátí celá jména
function celeJmenoObjId(obj) {
    return Object.values(obj).map(x => [x.name + " " + x.surname])
    //const objToArray = Object.values(obj)
    //console.log(objToArray)
    //objToArray.map(x => x.name + " " + x.surname)
}
console.log(celeJmenoObjId(users))
// 9.4 Bonus: Vytvořte funkci, která z objektu id:uživatel vrátí objekt id:"celé jméno"


//Opakovací úlohy 2:
//Vytvořte funkci hello(name), která dostane jméno a vrátí řetězec "Hello, [name]!"
function hello(anyName) {
    console.log("Hello, " + anyName + "!")
}
hello("Joe")
//Vytvořte třídu Person, která bude v konstruktoru mít jedinou vlastnost/atribut name
//Do třídy přidejte metodu "greet()", která vrátí řetězec "Hello, [name]!", 
//přičemž name bude jméno osoby předané v konstruktoru
class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        return "Hello, " + this.name + "!"
    }
}

let person1 = new Person ("John")
console.log(person1)
console.log(person1.greet())

// 11. Dveře, otevřené/zavřené, barva ("řetězec")
// 11.1. Vytvořte třídu Dvere, která v konstruktoru dostane `barva`, `otevrene` (boolean, stav dveří)
class Dvere {
    constructor(barva, otevrene) {
        this.barva = barva
        this.otevrene = otevrene
    }

    otevri() {
        this.otevrene = true
    }
    zavri() {
        this.otevrene = false
    }

    get popis() {
        return "tyto dvere maji " + this.barva + " barvu a jsou " + (this.otevrene ? "otevrene" : "zavrene")}
}

const dvere1 = new Dvere ("cerne", true)
console.log(dvere1.popis)
dvere1.zavri()
console.log(dvere1.popis)
console.log(dvere1)

// 11.2. Pridejte metodu otevri(), která nastaví `otevrene`
// 11.3. Pridejte metodu zavri(), která nastaví `otevrene` na false
// 11.4. Pridejte getter popis(), který popiše dveře, jejich barvu a stav

//Opakovací úkoly 3 - v skriptu napojeném na HTML dokument:
//Vytvořte proměnnou counter a tlačítko s nápisem "+1" a ID counterAdd
let counter = 0;

const body = document.querySelector("body")
const btn = document.createElement("button")
btn.setAttribute("id", "counterAdd")
btn.textContent = "+1"
body.appendChild(btn)

//Přidejte div s ID counterText. Po stisknutí tlačítka a zvětšení proměnné counter 
//vypište její hodnotu jako text do tohoto divu
const div = document.createElement("div")
div.setAttribute("id", "counterText")
//div.textContent = counter
body.appendChild(div)

//Napojte tlačítko tak, že se po jeho stisknutí zvětší proměnná counter o 1.
btn.addEventListener("click", (event) => {
    //event.preventDefault()
    counter = counter + 1
    div.textContent = counter
})

// 14. Object/dict + funkce
// 14.1. Vytvoř objekt databazeUzivatelu
//       { 1: { name: "Eva", surname: "Nová" }, 2: { name: "Jirka", surname: "Nový" } }
// 14.2. Vytvoř funkci najdiNejvetsiIdUzivatele()


let databazeUzivatelu = { 1: { name: "Eva", surname: "Nová" }, 2: { name: "Jirka", surname: "Nový" } }

function najdiNejvetsiId(databazeUzivatelu) {
    let ids = Object.keys(databazeUzivatelu)
    console.log(ids)
    const idsSorted = ids.sort((a,b) => a - b)
    console.log(idsSorted)
    console.log(idsSorted[idsSorted.length-1])
    return idsSorted[idsSorted.length-1]
}
najdiNejvetsiId(databazeUzivatelu)

// const obj = {
//     1: {name: "Eva", surname:"Nová"},
//     2: {name: "Jirka", surname: "Nový" }
// }
// function najdiNejvetsiIdUzivatele(objekty) {
//     let maximum = Number.MIN_VALUE
//     const kluce = Object.keys(objekty)
//     kluce.forEach(obj => {
//         if (obj > maximum) {
//             maximum = obj
//         }
//     });
//         return maximum
// }
// const vysledok = najdiNejvetsiIdUzivatele(obj);
// console.log(vysledok);

// 14.3. Vytvoř funkci vytvorUzivatele(jmeno, prijmeni) (adresa = objekt),
//       která přidá záznam do databazeUzivatelu s ID o jedna větším než najdiNejvetsiIdUzivatele()
// 14.4. Vytvoř funkci odstranUzivatele(id), která z databazeUzivatelu odstrani tohoto uzivatele

function vytvorUzivatele(jmeno, prijmeni) {
    const uziv = {name: jmeno, surnam: prijmeni}
    const nejvetsiId = najdiNejvetsiId(databazeUzivatelu)
    console.log(nejvetsiId)
    console.log(databazeUzivatelu[parseInt(nejvetsiId, 10) + 1] = uziv)
}

vytvorUzivatele("Jan", "Novak")

console.log(databazeUzivatelu)

function odstranUzivateleId(id) {
    delete databazeUzivatelu[id]
} 

odstranUzivateleId(3)

console.log(databazeUzivatelu)




// ulohy

function test(a, b, c) {
   console.log("a is: " + a + " b is: " + b + " c is: " + c)
}

test("a", 8, {})

function giveMe42() {
    return 42
}

const cislo42 = giveMe42()
console.log(cislo42)

let obj1 = {
    name: "Jan",
    surname: "Novak"
}
console.log(obj1)

obj1.age = 35
console.log(obj1)

delete obj1.age
console.log(obj1)

let numbers = [2, 3, 6, 92, 55]
console.log(numbers.filter(x => x % 2 == 0))


let dalsiObjekt = {
    id: 1,
    name: "Jan",
    surname: "Novak",
    age: 52
}
console.log(dalsiObjekt)
console.log(Object.keys(dalsiObjekt))
console.log(Object.values(dalsiObjekt))

let retezec = "ahoj"
let dvakratRetezec = retezec + " " + retezec
console.log(dvakratRetezec)
console.log(dvakratRetezec.length)

function pridejJedna(n) {
    return n + 1
}
console.log(pridejJedna(4))

function jeVetsiNezPet(m) {
    return m > 5
}

console.log(jeVetsiNezPet(10))
console.log(jeVetsiNezPet(4))

function zvetsiPole(pole) {
    return pole.concat([5, 6, 7])
}

console.log(zvetsiPole(numbers))

let num = 0;
let num1 = num + 5;
console.log(num)
console.log(num1)

let str = "ahoj"
let str1 = str + "!!!"
console.log(str)
console.log(str1)

let obj10 = {
    klic: "hodnota"
}
console.log(Object.values(obj10))
obj10.klic2 = "hodnota2"
console.log(obj10)

const pole10 = [1, 2, 3]
console.log(pole10[1])

function test2(a, b, c) {
    return b + 5
}
console.log(test2("", 0, {}))
console.log(test2("1", "2", "3"))

class Clovek {
    constructor(name) {
        this.name = name
    }
}

const clovek1 = new Clovek ("Honza")
console.log(clovek1)

function test3() {
    function test4() {
        return 5
    }
    return test4()
}
let vysledek = test3()
console.log(vysledek)

// Bleskové úlohy 3
// 17.1. Vytvoř pole o pěti prvcích, vypiš z něj pátý.
const pole5 = [1, 2, 3, 4, 5]
console.log(pole5[4])

// 17.2. Vytvoř řetězec o alespoň 5 znacích, vypiš z něj první znak.
let str5 = "nazdar"
console.log(str5.at(0))

// 17.3. Vytvoř objekt uživetele s dvěmi klíči (name, surname). Vypiš celé jméno uživatele.
const objekt2 = {
    name: "Jan",
    surname: "Novotny"
}
console.log(objekt2.name + " " + objekt2.surname)
// 17.4. Definuj funkci se třemi argumenty (třemi objekty), vypiš v ní třetí argument. Zavolej ji.
function test5(a, b, c) {
    return c
}
console.log(test5({}, {}, {}))
// 17.5. Vytvoř funkci o jednom argumentu (řetězci), která vrátí tento řetězec dvakrát. Zavolej ji.
function test6(a) {
    return a + a
}
console.log(test6("cus"))
// 17.6. Vytvoř funkci o jednou argumentu (objektu), která vrátí všechny klíče tohoto objektu. Zavolej ji.
function test7(a) {
    return Object.keys(a)
}
console.log(test7(databazeUzivatelu))
// 17.7. Definuj funkci bez argumentů, která vrátí libovolný objekt.
//       Zavolej ji, ulož výsledek do proměnné a vypiš hodnotu libovolného klíče.
function test8() {
    return databazeUzivatelu
}
let result = test8()
console.log(result[1])
// 17.8. Vytvoř pole nějakých čísel, jedním řádkem kódu z něj vyfiltruj lichá čísla, výsledek vypiš.
let poleCisel = [0, 1, 2, 3, 4, 5, 6, 7]

console.log(poleCisel.filter(x => x % 2 ===1))






function bonus(func) {
    return func
}
console.log(bonus(secist(1,1)))
