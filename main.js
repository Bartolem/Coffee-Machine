const input = require('sync-input')

let buy = "buy";
let fill = "fill";
let take = "take";

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
    coffeeMachine.water = coffeeMachine.water - espresso.water;
    coffeeMachine.milk = coffeeMachine.milk - espresso.milk;
    coffeeMachine.beans = coffeeMachine.beans - espresso.beans;
    coffeeMachine.cup = coffeeMachine.cup - espresso.cup;
    coffeeMachine.money = coffeeMachine.money + espresso.money;
}

function buyLatte() {
    coffeeMachine.water = coffeeMachine.water - latte.water;
    coffeeMachine.milk = coffeeMachine.milk - latte.milk;
    coffeeMachine.beans = coffeeMachine.beans - latte.beans;
    coffeeMachine.cup = coffeeMachine.cup - latte.cup;
    coffeeMachine.money = coffeeMachine.money + latte.money;
}

function buyCappuccino() {
    coffeeMachine.water = coffeeMachine.water - cappuccino.water;
    coffeeMachine.milk = coffeeMachine.milk - cappuccino.milk;
    coffeeMachine.beans = coffeeMachine.beans - cappuccino.beans;
    coffeeMachine.cup = coffeeMachine.cup - cappuccino.cup;
    coffeeMachine.money = coffeeMachine.money + cappuccino.money;
}

function getStateOfCoffeeMachine() {
    console.log("The coffee machine has: ");
    console.log(`${coffeeMachine.water} ml of water`);
    console.log(`${coffeeMachine.milk} ml of milk`);
    console.log(`${coffeeMachine.beans} g of coffee beans`);
    console.log(`${coffeeMachine.cup} disposable cups`);
    console.log(`${coffeeMachine.money} of money\n`);
}

function start() {
    getStateOfCoffeeMachine();

    let action = input("Write action (buy, fill, take):\n");

    switch (action) {
        case buy:
            buy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
            switch (buy) {
                case "1":
                    buyEspresso();
                    getStateOfCoffeeMachine();
                    break;
                case "2":
                    buyLatte();
                    getStateOfCoffeeMachine();
                    break;
                case "3":
                    buyCappuccino();
                    getStateOfCoffeeMachine();
                    break;
            }
            break;
        case fill:
            coffeeMachine.water = coffeeMachine.water +
                Number(input("Write how many ml of water you want to add:\n"));
            coffeeMachine.milk = coffeeMachine.milk +
                Number(input("Write how many ml of milk you want to add:\n"));
            coffeeMachine.beans = coffeeMachine.beans +
                Number(input("Write how many grams of coffee beans you want to add:\n"));
            coffeeMachine.cup = coffeeMachine.cup +
                Number(input("Write how many coffee cups you want to add:\n"));

            getStateOfCoffeeMachine();
            break;
        case take:
            console.log(`I gave you ${coffeeMachine.money}$\n`);
            coffeeMachine.money = 0;

            getStateOfCoffeeMachine();
            break;
    }
}

start();
