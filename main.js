const input = require('sync-input')

let waterQuantity;
let milkQuantity;
let coffeeBeansQuantity;
let cupsQuantity;
let money;
let buy;
let fill;
let take;

const coffeeMachine = {
    money: 550,
    water: 400,
    milk: 540,
    beans: 120,
    cup: 9
}

const espresso = {
    money: 4,
    water: 250,
    milk: 0,
    beans: 16,
    cup: 1
}

const latte = {
    money: 7,
    water: 350,
    milk: 75,
    beans: 20,
    cup: 1
}

const cappuccino = {
    money: 6,
    water: 200,
    milk: 100,
    beans: 12,
    cup: 1
}

function buyEspresso() {
    const result = Object.keys(coffeeMachine).reduce((firstValue, secondValue) =>
        (firstValue[secondValue] = coffeeMachine[secondValue] - espresso[secondValue], firstValue),{});

    return start();
}

function start() {
    console.log("The coffee machine has: ");
    console.log(`${waterQuantity} ml of water`);
    console.log(`${milkQuantity} ml of milk`);
    console.log(`${coffeeBeansQuantity} g of coffee beans`);
    console.log(`${cupsQuantity} disposable cups`);
    console.log(`${money} of money\n`);
}

start();

let action = input("Write action (buy, fill, take)\n");

switch (action) {
    case "buy":
        buy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
        switch (buy) {
            case "1":
                console.log(buyEspresso());
                break;
            case "2":

                break;
            case "3":

                break;
        }

        break;
    case "fill":
        waterQuantity = Number(input("Write how many ml of water you want to add:\n"));
        milkQuantity = Number(input("Write how many ml of milk you want to add:\n"));
        coffeeBeansQuantity = Number(input("Write how many grams of coffee beans you want to add:\n"));
        cupsQuantity = Number(input("Write how many coffee cups you want to add:\n"));
        break;
    case "take":
        console.log("I gave you $550");
        break;
}




